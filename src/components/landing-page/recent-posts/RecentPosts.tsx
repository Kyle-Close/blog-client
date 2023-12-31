import React from 'react';
import axios from 'axios';

import officeImg from '../../../assets/office.jpg';
import RecentPost from './RecentPost';

export interface IPost {
  _id: string;
  title: string;
  createdBy: string;
  createdOn?: string;
  content: string;
  isPublished: boolean;
  __v: number;
}

export interface IRecentPostData {
  msg: string;
  posts: IPost[];
}

function RecentPosts() {
  const [recentPostData, setRecentPostData] =
    React.useState<IRecentPostData | null>(null);

  React.useEffect(() => {
    const getRecentPosts = async () => {
      return await axios.get('https://blogging-wit-bits.fly.dev/recent-posts');
    };
    const setupData = async () => {
      const res = await getRecentPosts();
      const recentPost = res.data;
      setRecentPostData(recentPost);
    };

    setupData();
  }, []);

  const Posts = recentPostData?.posts.map((post, key) => {
    return (
      <RecentPost
        key={key}
        img={officeImg}
        title={post.title}
        content={post.content}
        url={`/posts/${post._id}`}
      />
    );
  });

  return (
    <div className={tw_recentPostsContainer}>
      <div className='flex flex-col gap-4 sm:gap-6'>
        <h3 className={tw_recentPostsTitle}>Recent Posts</h3>
        <div className={tw_postsContainer}>{Posts && Posts}</div>
      </div>
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
  'md:py-16',
  'lg:py-20',
  'text-black',
  'gap-4',
  'sm:gap-8',
].join(' ');

const tw_recentPostsTitle = ['text-2xl', 'sm:text-3xl', 'font-medium'].join(
  ' '
);

const tw_postsContainer = [
  'grid',
  'grid-cols-1',
  'md:grid-cols-2',
  'gap-4',
  'max-w-5xl',
].join(' ');
