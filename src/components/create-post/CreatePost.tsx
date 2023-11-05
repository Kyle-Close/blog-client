import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CreatePost() {
  const editorRef = useRef<any>(null);

  const inputStyle = {
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#2e2e2e',
  };

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <Box component='form' className={tw_wrapper}>
      <div className={tw_container}>
        <div className={tw_top}>
          <div className={tw_titleAndButton}>
            <h3 className={tw_title}>Create New Post</h3>
            <Button onClick={log} variant='contained' endIcon={<SendIcon />}>
              Post
            </Button>
          </div>
          <TextField
            focused
            label='Title'
            variant='outlined'
            inputProps={{ style: inputStyle }}
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
