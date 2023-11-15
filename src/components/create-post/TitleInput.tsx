import { Label, TextInput } from 'flowbite-react';
import React from 'react';

interface TitleInputProps {
  setPostFormData: any;
  title: any;
}

function TitleInput({ setPostFormData, title }: TitleInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostFormData((prevPostFormData: any) => {
      return {
        ...prevPostFormData,
        title: e.target.value,
      };
    });
  };

  return (
    <div className='grow'>
      <div className='mb-2 block'>
        <Label htmlFor='title' value='Title' className='text-slate-200' />
      </div>
      <TextInput
        value={title || ''} // Provide a default value or use an empty string
        onChange={handleChange}
        id='title'
        required
        sizing='md'
      />
    </div>
  );
}

export default TitleInput;
