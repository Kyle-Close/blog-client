import React from 'react';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useModal } from '../../hooks/useModal';
import Box from '@mui/material/Box';
import { useParams } from 'react-router';

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

  const editorRef = useRef<any>(null);
  const [postFormData, setPostFormData] = React.useState<IPostData | null>(
    null
  );

  React.useEffect(() => {
    if (postId) {
      const getPostData = async (id: string) => {
        try {
          const res = await axios.get(`http://localhost:3000/posts/${id}`);
          if (res) {
            const data = res.data;
            setPostFormData({
              title: data.title,
              content: data.content,
              category: data.category,
              isPublished: data.isPublished,
            });
          }
        } catch (err) {
          console.log(err);
        }
      };

      getPostData(postId);
    }
  }, []);

  const submitPost = async (e: any) => {
    e.preventDefault();

    if (!editorRef.current) return;

    const content = editorRef.current.getContent();
    const postData = { ...postFormData, content };

    try {
      const res = await GetCreatePostResponse(
        'http://localhost:3000/posts',
        postData
      );

      if (res.status === 200 || res.status === 201) {
        const msg = 'Post successfully created!';
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
    console.log(res);
    const { status, data } = res;
    const id = data.id;
    return { status, id };
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
            <PublishCheckbox setPostFormData={setPostFormData} />
            <SubmitButton submitPost={submitPost} />
          </div>
          <CategoryDropdown setPostFormData={setPostFormData} />
          <TitleInput setPostFormData={setPostFormData} />
        </div>

        <Editor
          apiKey='gmj1s7ghdl1r6il175wk2h9qps95o3qwa3zc8lczrj9wav73'
          onInit={(evt, editor) => (editorRef.current = editor)}
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
