import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export interface IPostCard {
  title: string;
  content: string;
  img: string;
  _id: string;
}

function PostCard({ title, content, img, _id }: IPostCard) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${_id}`);
  };

  return (
    <Card
      onClick={handleClick}
      className='max-w-xs cursor-pointer'
      imgAlt='Meaningful alt text for an image that is not purely decorative'
      imgSrc={img}
    >
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>{content}</p>
    </Card>
  );
}

export default PostCard;
