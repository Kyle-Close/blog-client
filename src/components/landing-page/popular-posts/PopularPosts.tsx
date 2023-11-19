import React from 'react';
import iPhoneImg from '../../../assets/iphone.jpg';
import PopularPost from './PopularPost';
import axios from 'axios';

interface PopularPost {
  title: string;
  author: string;
  postId: string;
}

function PopularPosts() {
  const [popularPostsData, setPopularPostsData] = React.useState([]);

  // Hit the API to get popular posts (seperate table for this?)
  React.useEffect(() => {
    const fetchPopularPosts = async () => {
      const response = await axios.get('http://localhost:3000/popular-posts');
      return response;
    };
    const getPosts = async () => {
      const response = await fetchPopularPosts();
      const posts = response.data.posts;
      setPopularPostsData(posts);
    };

    getPosts();
  }, []);

  const posts = popularPostsData.map((post: PopularPost, key) => {
    console.log('here', post);
    return (
      <PopularPost
        key={key}
        img={iPhoneImg}
        title={post.title}
        author={post.author}
        url={`/posts/${post.postId}`}
      />
    );
  });

  return (
    <div className={tw_popularPostsContainer}>
      <div className='flex flex-col'>
        <h3 className={tw_popularPostsTitle}>Popular Posts</h3>
        <div className={tw_popularPostCardsSection}>{posts && posts}</div>
      </div>
    </div>
  );
}

export default PopularPosts;

const tw_popularPostsContainer = [
  'flex',
  'flex-col',
  'gap-4',
  'px-4',
  'py-12',
  'sm:pt-16',
  'lg:pt-16',
  'sm:pb-16',
  'lg:pb-24',
  'bg-neutral-800',
].join(' ');

const tw_popularPostsTitle = [
  'text-xl',
  'sm:text-2xl',
  'lg:text-3xl',
  'font-semibold',
  'self-center',
  'px-6',
  'py-2',
].join(' ');

const tw_popularPostCardsSection = [
  'pt-4',
  'lg-pt-8',
  'flex',
  'flex-wrap',
  'gap-4',
  'justify-center',
].join(' ');
