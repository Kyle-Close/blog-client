import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function CreatePost() {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <Box component='form' className={tw_wrapper}>
      <div className={tw_container}>
        <div className={tw_top}>
          <h3 className={tw_title}>Create New Post</h3>
          <Button onClick={log} variant='contained' endIcon={<SendIcon />}>
            Create Post
          </Button>
        </div>
        <TextField
          sx={{ border: '1px solid white', borderRadius: '4px' }}
          id='outlined'
          label='Title'
          variant='outlined'
        />
        <Editor
          apiKey='gmj1s7ghdl1r6il175wk2h9qps95o3qwa3zc8lczrj9wav73'
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue='<p>This is the initial content of the editor.</p>'
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

const tw_top = ['flex', 'justify-between', 'items-end'].join(' ');

const tw_title = ['text-lg', 'font-semibold', 'md:text-xl', 'lg:text-2xl'].join(
  ' '
);
