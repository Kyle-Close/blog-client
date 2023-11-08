import { Label, Select } from 'flowbite-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IPostData } from './CreatePost';

export interface ICategory {
  _id: string;
  category: string;
  __v: number;
}

interface CategoryDropdownProps {
  setPostFormData: any;
}

interface ISelectedOption {
  category: string;
  id: string;
}

function CategoryDropdown({ setPostFormData }: CategoryDropdownProps) {
  const [categories, setCategories] = useState<ICategory[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<ISelectedOption | null>(
    null
  );

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:3000/categories');
      if (res.data) {
        setCategories(res.data.categories);
        setSelectedOption(res.data.categories[0]._id);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    setPostFormData((prevPostFormData: IPostData) => {
      return {
        ...prevPostFormData,
        category: selectedOption?.id,
      };
    });
  }, [selectedOption, setPostFormData]);

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
    return categories?.map((category) => {
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

function capitalizeWords(str: string) {
  const words = str.split(' ');
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(' ');
}
