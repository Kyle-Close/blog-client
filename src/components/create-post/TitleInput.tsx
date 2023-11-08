import { Label, TextInput } from 'flowbite-react';

function TitleInput() {
  return (
    <div className='grow'>
      <div className='mb-2 block'>
        <Label htmlFor='title' value='Title' className='text-slate-200' />
      </div>
      <TextInput id='title' required sizing='md' />
    </div>
  );
}

export default TitleInput;
