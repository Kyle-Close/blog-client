import React from 'react';
import axios from 'axios';

import officeImg from '../../../assets/office.jpg';
import RecentPost from './RecentPost';

interface IPost {
  _id: string;
  title: string;
  createdBy: string;
  content: string;
  isPublished: boolean;
  __v: number;
}

interface IRecentPostData {
  msg: string;
  posts: IPost[];
}

function RecentPosts() {
  const [recentPostData, setRecentPostData] =
    React.useState<IRecentPostData | null>(null);

  React.useEffect(() => {
    const getRecentPosts = async () => {
      return await axios.get('http://localhost:3000/recent-posts');
    };
    const setupData = async () => {
      const res = await getRecentPosts();
      const recentPost = res.data;
      setRecentPostData(recentPost);
    };

    setupData();
  }, []);

  const Posts = recentPostData?.posts.map((post) => {
    return (
      <RecentPost
        img={officeImg}
        title={post.title}
        content={post.content}
        url='/'
      />
    );
  });

  return (
    <div className={tw_recentPostsContainer}>
      <h3 className={tw_recentPostsTitle}>Recent Posts</h3>
      <div className={tw_postsContainer}>{Posts && Posts}</div>
      <a href='/' className={tw_link}>
        Want more? See all posts here.
      </a>
    </div>
  );
}

export default RecentPosts;

const tw_recentPostsContainer = [
  'bg-neutral-300',
  'flex',
  'flex-col',
  'items-center',
  'p-4',
  'py-6',
  'sm:py-10',
  'text-black',
  'gap-4',
  'sm:gap-8',
].join(' ');

const tw_recentPostsTitle = ['text-2xl', 'sm:text-3xl', 'font-medium'].join(
  ' '
);

const tw_postsContainer = [
  'flex',
  'flex-col',
  'gap-4',
  'sm:max-w-lg',
  'md:max-w-xl',
  'lg:max-w-2xl',
].join(' ');

const tw_link = ['text-sky-600', 'font-medium'].join(' ');
