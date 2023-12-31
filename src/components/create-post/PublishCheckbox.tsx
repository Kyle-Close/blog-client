import { Checkbox, Label } from 'flowbite-react';

interface PublishCheckboxProps {
  setPostFormData: any;
  isChecked: any;
}

function PublishCheckbox({ setPostFormData, isChecked }: PublishCheckboxProps) {
  const handleChange = (e: any) => {
    setPostFormData((prevPostFormData: any) => {
      return {
        ...prevPostFormData,
        isPublished: e.target.checked,
      };
    });
  };

  return (
    <div className='flex max-w-md flex-col gap-4' id='checkbox'>
      <div className='flex items-center gap-2'>
        <Checkbox checked={isChecked} onChange={handleChange} id='accept' />
        <Label htmlFor='accept' className='flex text-slate-200'>
          Publish
        </Label>
      </div>
    </div>
  );
}

export default PublishCheckbox;
