import { Label, Select } from 'flowbite-react';
import axios from 'axios';
import React from 'react';

export interface ICategory {
  _id: string;
  category: string;
  __v: number;
}

function CategoryDropdown() {
  const [categories, setCategories] = React.useState<ICategory[] | null>(null);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:3000/categories');
      if (res.data) {
        setCategories(res.data.categories);
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchCategories();
  }, []);

  const createDropdownOptions = () => {
    return categories?.map((category) => {
      return <option>{capitalizeWords(category.category)}</option>;
    });
  };

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
        {createDropdownOptions()}
      </Select>
    </div>
  );
}

export default CategoryDropdown;

function capitalizeWords(str: string) {
  const words = str.split(' ');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(' ');
}
