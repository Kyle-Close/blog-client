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
  category: { _id: string; category: string };
  isPublished: boolean;
}

function CreatePost() {
  const { postId } = useParams();
  const { user } = React.useContext(UserContext) as UserContextType;
  const { open, handleOpen, handleClose, modalData, setModalDataState } =
    useModal();

  const [allCategories, setAllCategories] = React.useState();

  const editorRef = useRef<any>(null);
  const [postFormData, setPostFormData] = React.useState<IPostData | null>(
    null
  );

  const isEditing = postId ? true : false;

  const getInitialPostFormData = async (isEditing: boolean) => {
    const fetchCategories = async () => {
      return await axios.get('https://blogging-wit-bits.fly.dev/categories');
    };

    const getCategoryData = async () => {
      const categoriesRes = await fetchCategories();
      if (categoriesRes && categoriesRes.status === 200) {
        const { categories } = categoriesRes.data;
        return categories;
      }
    };

    const categoryData = await getCategoryData();
    if (categoryData.length > 0) {
      setAllCategories(categoryData);
    }

    if (!isEditing) {
      const category = {
        _id: categoryData[0]._id,
        category: categoryData[0].category,
      };
      return {
        title: '',
        content: '',
        category,
        isPublished: true,
      };
    }

    const getPostData = async (id: any) => {
      try {
        const res = await axios.get(
          `https://blogging-wit-bits.fly.dev/posts/${id}`
        );
        if (res) {
          const data = res.data;
          return {
            title: data.title,
            content: data.content,
            category: data.category,
            isPublished: data.isPublished,
          };
        }
      } catch (err) {
        console.log(err);
      }
    };

    const fetchedPostData = await getPostData(postId);
    let finalCategory = {
      _id: categoryData[0]._id,
      category: categoryData[0].category,
    };

    if (fetchedPostData) {
      const category = categoryData.find(
        (category: any) => category._id === fetchedPostData.category
      );

      finalCategory = {
        _id: category._id,
        category: category.category,
      };

      return {
        title: fetchedPostData.title,
        content: he.decode(fetchedPostData.content),
        category: finalCategory,
        isPublished: fetchedPostData.isPublished,
      };
    }

    return {
      title: '',
      content: '',
      category: { _id: '', category: '' },
      isPublished: '',
    };
  };

  React.useEffect(() => {
    const fetchInitialData = async () => {
      const initialData = await getInitialPostFormData(isEditing);
      setPostFormData(initialData);
    };

    fetchInitialData();
  }, []);

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
          `https://blogging-wit-bits.fly.dev/posts/${postId}`,
          postData
        );
      } else {
        res = await GetCreatePostResponse(
          'https://blogging-wit-bits.fly.dev/posts',
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

  const handleEditorChange = (content: any) => {
    setPostFormData((prevPostFormData: any) => ({
      ...prevPostFormData,
      content: he.decode(content),
    }));
  };

  return (
    postFormData &&
    allCategories && (
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
                isChecked={postFormData.isPublished}
                setPostFormData={setPostFormData}
              />
              {postId ? (
                <SubmitButton text={'Update'} submitPost={submitPost} />
              ) : (
                <SubmitButton text={'Post'} submitPost={submitPost} />
              )}
            </div>
            <CategoryDropdown
              setPostFormData={setPostFormData}
              category={postFormData.category}
              categories={allCategories}
            />
            <TitleInput
              setPostFormData={setPostFormData}
              title={postFormData?.title}
            />
          </div>

          <Editor
            onEditorChange={handleEditorChange}
            apiKey='gmj1s7ghdl1r6il175wk2h9qps95o3qwa3zc8lczrj9wav73'
            value={postFormData.content}
            onInit={(evt, editor) => {
              editorRef.current = editor;
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              evt; // Ignore the unused parameter
            }}
            init={{
              height: '100%',
            }}
          />
        </div>
      </Box>
    )
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
