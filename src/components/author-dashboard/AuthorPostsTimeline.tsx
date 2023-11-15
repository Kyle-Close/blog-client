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
import ConfirmDeletePostModal from './ConfirmDeletePostModal';
import { limitChars } from '../../helpers/util';

interface AuthorPostsTimelineProps {
  postLimit?: number;
}

function AuthorPostsTimeline({ postLimit }: AuthorPostsTimelineProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const [recentPostData, setRecentPostData] = React.useState<IPost[] | null>(
    null
  );
  const [selectedPost, setSelectedPost] = React.useState<IPost | null>(null);

  React.useEffect(() => {
    setupData();
  }, []);

  const getPosts = async () => {
    if (postLimit) {
      return await axios.post(`http://localhost:3000/posts/user/${id}`, {
        postLimit,
      });
    } else return await axios.post(`http://localhost:3000/posts/user/${id}`);
  };

  const setupData = async () => {
    const res = await getPosts();
    const recentPost = res.data.posts;

    setRecentPostData(recentPost);
  };

  const timelineItems = () => {
    if (!recentPostData) return null;

    return recentPostData.map((post, key) => (
      <Timeline.Item key={key}>
        <Timeline.Point />
        <Timeline.Content className='flex flex-col gap-2'>
          <Timeline.Time>{formatDate(post.createdOn)}</Timeline.Time>
          <div className='flex'>{isPublishedBadge(post.isPublished)}</div>
          <Timeline.Title className='text-slate-200'>
            {post.title}
          </Timeline.Title>
          <Timeline.Body className='text-slate-200'>
            {limitChars(removeMarkup(post.content), 300)}
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
            <button onClick={() => handleDeleteClick(post)} className='p-1 '>
              <AiFillDelete color='#ba0000' className='w-8 h-8' />
            </button>
          </div>
        </Timeline.Content>
      </Timeline.Item>
    ));
  };

  const handleDeleteClick = (post: IPost) => {
    setSelectedPost(post);
    setOpenModal(true);
  };

  const handleDelete = async () => {
    const deletePost = async (id: string) => {
      try {
        const res = await axios.delete(`http://localhost:3000/posts/${id}`);
        if (res.status === 204) {
          setupData();
          navigate(`/dashboard/user/${id}`);
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };

    deletePost(selectedPost?._id);
  };

  const handleViewClick = (postId: string) => {
    navigate(`/posts/${postId}`);
  };

  const isPublishedBadge = (isPublished: boolean) => {
    if (isPublished) return <Badge color='success'>Published</Badge>;
    else return <Badge color='failure'>Unpublished</Badge>;
  };

  return (
    <>
      <Timeline>
        {recentPostData ? (
          timelineItems()
        ) : (
          <div className='grow'>Looks like you don't have any posts yet!</div>
        )}
      </Timeline>
      {selectedPost && (
        <ConfirmDeletePostModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          post={selectedPost}
          onDelete={handleDelete}
        />
      )}
    </>
  );
}

export default AuthorPostsTimeline;
