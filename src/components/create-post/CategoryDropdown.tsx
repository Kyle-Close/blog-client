import { Label, Select } from 'flowbite-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IPostData } from './CreatePost';
import { capitalizeWords } from '../../helpers/util';

export interface ICategory {
  _id: string;
  category: string;
  __v: number;
}

interface CategoryDropdownProps {
  setPostFormData: any;
  category: { _id: string; category: string };
  categories: ICategory[];
}

interface ISelectedOption {
  category: string;
  _id: string;
}

function CategoryDropdown({
  setPostFormData,
  category,
  categories,
}: CategoryDropdownProps) {
  const [selectedOption, setSelectedOption] = useState<ISelectedOption | null>(
    null
  );

  console.log('category', category);
  console.log('categories', categories);

  useEffect(() => {
    setPostFormData((prevPostFormData: IPostData) => {
      return {
        ...prevPostFormData,
        category: selectedOption?._id,
      };
    });
  }, [selectedOption]);

  React.useEffect(() => {
    setSelectedOption(category);
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const id = findSelectedCategoryId(event.target.value);
    if (id !== null) setSelectedOption({ category: event.target.value, id });
  };

  const findSelectedCategoryId = (category: string) => {
    if (!categories) return null;

    const foundItem = categories.find((item) => item.category === category);

    if (foundItem) {
      return foundItem._id;
    }
    return null;
  };

  const createDropdownOptions = () => {
    return categories.map((category) => {
      return (
        <option key={category._id} value={category.category}>
          {capitalizeWords(category.category)}
        </option>
      );
    });
  };

  return (
    selectedOption && (
      <div className='max-w-md'>
        <div className='mb-2 block'>
          <Label
            htmlFor='categories'
            value='Select category'
            className='text-slate-200'
          />
        </div>

        <Select
          value={selectedOption.category}
          onChange={handleSelectChange}
          id='categories'
          required
          sizing='md'
        >
          {createDropdownOptions()}
        </Select>
      </div>
    )
  );
}

export default CategoryDropdown;
