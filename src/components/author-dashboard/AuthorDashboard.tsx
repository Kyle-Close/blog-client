import React from 'react';
import Footer from '../footer/Footer';
import AuthorPostsTimeline from './AuthorPostsTimeline';
import { useNavigate, useParams } from 'react-router';

import { Button } from 'flowbite-react';
import { HiOutlineArrowRight } from 'react-icons/hi';

// Context
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../@types/user';

function AuthorDashboard() {
  const { user } = React.useContext(UserContext) as UserContextType;
  const { id } = useParams();
  const navigate = useNavigate();

  return user ? (
    <div className={tw_dashboardWrapper}>
      <div className={tw_dashboardContentContainer}>
        <h3
          className={tw_title}
        >{`Welcome to your dashboard ${user?.username}`}</h3>
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
  ) : (
    <div className='flex justify-center p-10 text-center text-red-600'>
      Must be logged in as author to view dashboard.
    </div>
  );
}

export default AuthorDashboard;

const tw_dashboardWrapper = ['flex', 'flex-col', 'flex-grow', 'grow'].join(' ');

const tw_dashboardContentContainer = [
  'px-6',
  'py-10',
  'flex',
  'flex-col',
  'gap-8',
  'grow',
  'max-w-4xl',
  'w-full',
  'self-center',
].join(' ');

const tw_title = ['text-xl', 'text-center'].join(' ');
