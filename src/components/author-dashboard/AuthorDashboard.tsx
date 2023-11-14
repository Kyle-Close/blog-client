import Footer from '../footer/Footer';
import AuthorPostsTimeline from './AuthorPostsTimeline';
import { useNavigate, useParams } from 'react-router';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

function AuthorDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className='flex flex-col grow'>
      <div className='px-6 py-10 flex flex-col gap-8 grow'>
        <h3 className='text-xl text-center'>Welcome to your dashboard Kyle!</h3>
        <Button onClick={() => navigate('/create-post')} color='success'>
          Create Blog Post
        </Button>
        <AuthorPostsTimeline postLimit={3} />
        <Button onClick={() => navigate(`/posts/user/${id}`)}>
          View all posts
          <HiOutlineArrowRight className='ml-2 h-5 w-5' />
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default AuthorDashboard;
