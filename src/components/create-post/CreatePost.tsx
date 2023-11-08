import React from 'react';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useModal } from '../../hooks/useModal';
import CreatePostModal from './CreatePostModal';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// Context
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../@types/user';

import axios from 'axios';

function CreatePost() {
  const { user } = React.useContext(UserContext) as UserContextType;
  const { open, handleOpen, handleClose, modalData, setModalDataState } =
    useModal();

  const editorRef = useRef<any>(null);
  const [title, setTitle] = React.useState<string | null>(null);

  const inputStyle = {
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#2e2e2e',
  };

  const submitPost = async (e: any) => {
    e.preventDefault();

    if (!editorRef.current) return;

    const content = editorRef.current.getContent();
    const postData = { title: title, content: content };
    console.dir(postData);

    try {
      const status = await GetCreatePostStatus(
        'http://localhost:3000/posts',
        postData
      );

      if (status === 200 || status === 201) {
        const msg = 'Post successfully created!';
        const btnText = 'See Post';
        const btnLink = '/';

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

  const GetCreatePostStatus = async (url: string, postData: any) => {
    const res: any = await axios.post(url, postData);

    const { status } = res;
    return status;
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
          <div className={tw_titleAndButton}>
            <h3 className={tw_title}>Create New Post</h3>
            <Button
              disabled={title ? false : true}
              type='submit'
              onClick={submitPost}
              variant='contained'
              endIcon={<SendIcon />}
            >
              Post
            </Button>
          </div>
          <div className='flex gap-2'>
            <TextField
              focused
              label='Title'
              variant='outlined'
              inputProps={{ style: inputStyle }}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Select
              inputProps={{ style: inputStyle }}
              className='grow'
              label='Category'
              id='demo-simple-select'
              value='test'
            >
              <MenuItem value={10}>Web Development</MenuItem>
              <MenuItem value={20}>Electronics</MenuItem>
              <MenuItem value={30}>Gaming</MenuItem>
            </Select>
          </div>
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
  'pt-8',
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

const tw_top = ['px-4', 'flex', 'flex-col', 'gap-4'].join(' ');

const tw_titleAndButton = ['flex', 'justify-between', 'items-end'].join(' ');

const tw_title = ['text-lg', 'font-semibold', 'md:text-xl', 'lg:text-2xl'].join(
  ' '
);
