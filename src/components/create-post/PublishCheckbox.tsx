import { Checkbox, Label } from 'flowbite-react';
import React from 'react';

interface PublishCheckboxProps {
  setPostFormData: any;
}

function PublishCheckbox({ setPostFormData }: PublishCheckboxProps) {
  const [isPublished, setIsPublished] = React.useState<boolean>(true);

  React.useEffect(() => {
    setPostFormData((prevPostFormData: any) => {
      return {
        ...prevPostFormData,
        isPublished,
      };
    });
  }, [isPublished]);

  const handleChange = (e: any) => {
    const isChecked = e.target.checked;
    setIsPublished(isChecked);
  };

  return (
    <div className='flex max-w-md flex-col gap-4' id='checkbox'>
      <div className='flex items-center gap-2'>
        <Checkbox onChange={handleChange} id='accept' defaultChecked />
        <Label htmlFor='accept' className='flex text-slate-200'>
          Publish
        </Label>
      </div>
    </div>
  );
}

export default PublishCheckbox;
