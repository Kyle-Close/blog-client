import React from 'react';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

import axios from 'axios';

function CreatePost() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editorRef = useRef<any>(null);
  const [title, setTitle] = React.useState<string | null>(null);

  const inputStyle = {
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#2e2e2e',
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const submitPost = async (e: any) => {
    e.preventDefault();
    if (!editorRef.current) return;

    const content = editorRef.current.getContent();
    const postData = { title: title, content: content };

    try {
      const res: any = await axios.post(
        'http://localhost:3000/posts',
        postData
      );

      const resMessage = res.response.data.message;
      console.log(resMessage);
    } catch (error: any) {
      if (error.response) {
        const msg = error.response.data.message;
        console.log(msg);
        handleOpen();
      }
    }
  };

  return (
    <Box component='form' className={tw_wrapper}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={modalStyle}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Text in a modal
          </Typography>
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
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
          <TextField
            focused
            label='Title'
            variant='outlined'
            inputProps={{ style: inputStyle }}
            onChange={(e) => setTitle(e.target.value)}
          />
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
