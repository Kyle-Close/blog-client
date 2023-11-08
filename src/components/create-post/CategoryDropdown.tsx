import { Label, Select, TextInput } from 'flowbite-react';

function CategoryDropdown() {
  return (
    <div className='max-w-md'>
      <div className='mb-2 block'>
        <Label
          htmlFor='categories'
          value='Select category'
          className='text-slate-200'
        />
      </div>
      <Select id='countries' required sizing='md'>
        <option>Web Dev</option>
        <option>Electronics</option>
        <option>Gaming</option>
      </Select>
    </div>
  );
}

export default CategoryDropdown;
