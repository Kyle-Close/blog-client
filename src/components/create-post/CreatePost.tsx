import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function CreatePost() {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className='mt-32'>
      <Editor
        apiKey='gmj1s7ghdl1r6il175wk2h9qps95o3qwa3zc8lczrj9wav73'
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue='<p>This is the initial content of the editor.</p>'
        init={{}}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
}

export default CreatePost;
