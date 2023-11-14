import { Timeline } from 'flowbite-react';

import { Badge } from 'flowbite-react';
import { AiFillDelete, AiFillEye, AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import React from 'react';
import { IPost } from '../landing-page/recent-posts/RecentPosts';
import { useParams } from 'react-router-dom';
import { removeMarkup } from '../../helpers/util';
import { formatDate } from '../../helpers/util';
import { useNavigate } from 'react-router-dom';

function AuthorPostsTable() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recentPostData, setRecentPostData] = React.useState<IPost[] | null>(
    null
  );

  React.useEffect(() => {
    const getRecentPosts = async () => {
      return await axios.get(`http://localhost:3000/posts/user/${id}`);
    };

    const setupData = async () => {
      const res = await getRecentPosts();
      const recentPost = res.data.posts;
      setRecentPostData(recentPost);
    };

    setupData();
  }, []);

  const timelineItems = () => {
    if (!recentPostData) return null;

    return recentPostData.map((post, key) => (
      <Timeline.Item key={key}>
        <Timeline.Point />
        <Timeline.Content>
          <div className='flex'>{isPublishedBadge(post.isPublished)}</div>
          <Timeline.Time>{formatDate(post.createdOn)}</Timeline.Time>
          <Timeline.Title className='text-slate-200'>
            {post.title}
          </Timeline.Title>
          <Timeline.Body className='text-slate-200'>
            {removeMarkup(post.content)}
          </Timeline.Body>
          <div className='flex justify-end gap-4 pt-4'>
            <button onClick={() => handleViewClick(post._id)} className='p-1 '>
              <AiFillEye color='yellow' className='w-8 h-8' />
            </button>
            <div className='w-1 border-r border-white opacity-50'></div>
            <button className='p-1 '>
              <AiFillEdit color='white' className='w-8 h-8' />
            </button>
            <div className='w-1 border-r border-white opacity-50'></div>
            <button className='p-1 '>
              <AiFillDelete color='#ba0000' className='w-8 h-8' />
            </button>
            <div className='w-1 border-r border-white opacity-50'></div>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    ));
  };

  const handleViewClick = (postId: string) => {
    navigate(`/posts/${postId}`);
  };

  const isPublishedBadge = (isPublished: boolean) => {
    if (isPublished) return <Badge color='success'>Published</Badge>;
    else return <Badge color='failure'>Unpublished</Badge>;
  };

  return <Timeline>{recentPostData && timelineItems()}</Timeline>;
}

export default AuthorPostsTable;
