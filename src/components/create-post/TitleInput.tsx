import { Label, TextInput } from 'flowbite-react';
import React from 'react';

interface TitleInputProps {
  setPostFormData: any;
}

function TitleInput({ setPostFormData }: TitleInputProps) {
  const [title, setTitle] = React.useState<string>('');

  React.useEffect(() => {
    setPostFormData((prevPostFormData: any) => {
      return {
        ...prevPostFormData,
        title,
      };
    });
  }, [title]);

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <div className='grow'>
      <div className='mb-2 block'>
        <Label htmlFor='title' value='Title' className='text-slate-200' />
      </div>
      <TextInput onChange={handleChange} id='title' required sizing='md' />
    </div>
  );
}

export default TitleInput;
