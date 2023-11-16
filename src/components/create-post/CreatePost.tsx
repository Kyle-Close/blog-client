import React from 'react';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useModal } from '../../hooks/useModal';
import Box from '@mui/material/Box';
import { useParams } from 'react-router';
import he from 'he';

import CategoryDropdown from './CategoryDropdown';
import TitleInput from './TitleInput';
import SubmitButton from './SubmitButton';
import PublishCheckbox from './PublishCheckbox';
import CreatePostModal from './CreatePostModal';

// Context
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../@types/user';

import axios from 'axios';

export interface IPostData {
  title: string;
  content: string;
  category: string;
  isPublished: boolean;
}

function CreatePost() {
  const { postId } = useParams();
  const { user } = React.useContext(UserContext) as UserContextType;
  const { open, handleOpen, handleClose, modalData, setModalDataState } =
    useModal();
  const [initialContentSet, setInitialContentSet] = React.useState(false);

  const editorRef = useRef<any>(null);
  const [postFormData, setPostFormData] = React.useState<IPostData | null>(
    null
  );

  React.useEffect(() => {
    if (postId && !initialContentSet) {
      const getPostData = async (id: string) => {
        try {
          const res = await axios.get(`http://localhost:3000/posts/${id}`);
          if (res) {
            const data = res.data;
            console.log(data);

            // Decode HTML entities
            setPostFormData({
              title: data.title,
              content: he.decode(data.content),
              category: data.category,
              isPublished: data.isPublished,
            });
            setInitialContentSet(true);
          }
        } catch (err) {
          console.log(err);
        }
      };

      getPostData(postId);
    }
  }, [postId, initialContentSet]);

  React.useEffect(() => {
    console.log('right here', postFormData);
    if (editorRef.current && initialContentSet) {
      const fetchedContent = postFormData?.content || '';
      editorRef.current.setContent(fetchedContent, { format: 'raw' });
    }
  }, [postFormData, initialContentSet]);

  const submitPost = async (e: any) => {
    e.preventDefault();

    if (!editorRef.current) return;

    const content = editorRef.current.getContent();
    const postData = { ...postFormData, content };

    if (!postData.content || !postData.title) return;

    try {
      let res;

      if (postId) {
        res = await GetUpdatePostResponse(
          `http://localhost:3000/posts/${postId}`,
          postData
        );
      } else {
        res = await GetCreatePostResponse(
          'http://localhost:3000/posts',
          postData
        );
      }

      if (res.status === 200 || res.status === 201) {
        const msg = postId
          ? 'Post successfully updated!'
          : 'Post successfully created!';
        const btnText = 'See Post';
        const btnLink = `/posts/${res.id}`;

        setModalDataState({ msg, btnText, btnLink, isSuccess: true });
        handleOpen();
      }
    } catch (error: any) {
      if (error.response) {
        const { status } = error.response;

        if (status >= 400) {
          setModalDataState(GetErrMsgData());
          handleOpen();
        }
      }
    }
  };

  const GetErrMsgData = () => {
    if (user) {
      return {
        msg: 'Must be an author to create a post.',
        btnText: 'Apply Now',
        btnLink: '/',
        isSuccess: false,
      };
    }
    return {
      msg: 'Must be logged in to create a post',
      btnText: 'Login',
      btnLink: '/login',
      isSuccess: false,
    };
  };

  const GetCreatePostResponse = async (url: string, postData: any) => {
    const res: any = await axios.post(url, postData);
    const { status, data } = res;
    const id = data.id;
    return { status, id };
  };

  const GetUpdatePostResponse = async (url: string, postData: any) => {
    const res: any = await axios.put(url, postData);
    console.log(res);
    const { status, data } = res;
    const id = data._id;
    return { status, id };
  };

  const handleEditorChange = (content: any, editor: any) => {
    setPostFormData((prevPostFormData: any) => ({
      ...prevPostFormData,
      content: content,
    }));
  };

  return (
    <Box component='form' className={tw_wrapper}>
      {open && modalData && (
        <CreatePostModal
          open={open}
          handleClose={handleClose}
          msg={modalData.msg}
          btnText={modalData.btnText}
          btnLink={modalData.btnLink}
          isSuccess
        />
      )}

      <div className={tw_container}>
        <div className={tw_top}>
          <div className='flex flex-col gap-2'>
            <PublishCheckbox
              isChecked={postFormData?.isPublished}
              setPostFormData={setPostFormData}
            />
            {postId ? (
              <SubmitButton text={'Update'} submitPost={submitPost} />
            ) : (
              <SubmitButton text={'Post'} submitPost={submitPost} />
            )}
          </div>
          <CategoryDropdown setPostFormData={setPostFormData} />
          <TitleInput
            setPostFormData={setPostFormData}
            title={postFormData?.title}
          />
        </div>

        <Editor
          onEditorChange={handleEditorChange}
          apiKey='gmj1s7ghdl1r6il175wk2h9qps95o3qwa3zc8lczrj9wav73'
          value={postFormData?.content}
          onInit={(evt, editor) => {
            editorRef.current = editor;

            // Set the content of the editor when initializing
            const fetchedContent = postFormData?.content || '';
            editor.setContent(fetchedContent);
          }}
          init={{
            height: '100%',
          }}
        />
      </div>
    </Box>
  );
}

export default CreatePost;

const tw_wrapper = ['flex', 'grow', 'justify-center'].join(' ');

const tw_container = [
  'grow',
  'flex',
  'flex-col',
  'gap-4',
  'md:max-w-xl',
  'md:py-10',
  'lg:max-w-3xl',
  'lg:py-14',
  'xl:max-w-5xl',
  'xl:py-16',
].join(' ');

const tw_top = [
  'px-4',
  'pt-10',
  'flex',
  'flex-row-reverse',
  'gap-2',
  'items-end',
  'flex-wrap',
  'justify-center',
].join(' ');
