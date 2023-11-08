'use client';

import { Checkbox, Label } from 'flowbite-react';

function PublishCheckbox() {
  return (
    <div className='flex max-w-md flex-col gap-4' id='checkbox'>
      <div className='flex items-center gap-2'>
        <Checkbox id='accept' defaultChecked />
        <Label htmlFor='accept' className='flex text-slate-200'>
          Publish
        </Label>
      </div>
    </div>
  );
}

export default PublishCheckbox;
