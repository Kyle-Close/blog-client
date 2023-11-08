import React from 'react';
import PostCard from './Card';
import img from '../../assets/office.jpg';
import { useParams } from 'react-router-dom';

import { IPostCard } from './Card';

enum Category {
  'WEB_DEVELOPMENT',
  'ELECTRONICS',
  'GAMING',
}

function PostGroup() {
  const { id } = useParams();
  const [posts, setPosts] = React.useState<IPostCard | null>(null);

  if (!id) return;

  const selectedCategory: Category | null = getCategoryFromURL(id);

  if (!selectedCategory) return;

  const endPointURL: string | null = getEndPointURL(selectedCategory);

  return <PostCard title='test' content='some content' img={img} />;
}

const getCategoryFromURL = (id: string): Category | null => {
  switch (id.toUpperCase()) {
    case 'WEB-DEVELOPMENT':
      return Category.WEB_DEVELOPMENT;
    case 'ELECTRONICS':
      return Category.ELECTRONICS;
    case 'GAMING':
      return Category.GAMING;
    default:
      return null;
  }
};

const getEndPointURL = (category: Category): string | null => {
  switch (category) {
    case Category.WEB_DEVELOPMENT:
      return '';
    case Category.ELECTRONICS:
      return '';
    case Category.GAMING:
      return '';
    default:
      return null;
  }
};

export default PostGroup;
