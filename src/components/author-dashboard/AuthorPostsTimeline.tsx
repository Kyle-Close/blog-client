import { Timeline } from 'flowbite-react';

import { Badge } from 'flowbite-react';
import { AiFillDelete, AiFillEye, AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import React from 'react';
import { IPost } from '../landing-page/recent-posts/RecentPosts';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../helpers/util';
import { useNavigate } from 'react-router-dom';
import ConfirmDeletePostModal from './ConfirmDeletePostModal';
import { limitChars, capitalizeWords } from '../../helpers/util';
import he from 'he';
import { useLocation } from 'react-router-dom';

interface AuthorPostsTimelineProps {
  postLimit?: number;
}

function AuthorPostsTimeline({ postLimit }: AuthorPostsTimelineProps) {
  const { id } = useParams();
  const location = useLocation();
  const currentPath = location.pathname;
  const isDashboard = currentPath.includes('dashboard');
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
      return await axios.post(
        `https://blogging-wit-bits.fly.dev/posts/user/${id}`,
        {
          postLimit,
        }
      );
    } else
      return await axios.post(
        `https://blogging-wit-bits.fly.dev/posts/user/${id}`
      );
  };

  const getCategories = async () => {
    return await axios.get('https://blogging-wit-bits.fly.dev/categories');
  };

  const getCategoryNameById = (id: any, categories: any) => {
    const matchedCategory = categories.find(
      (category: any) => category._id === id
    );
    return capitalizeWords(matchedCategory.category);
  };

  const setupData = async () => {
    const res = await getPosts();
    const recentPosts = res.data.posts;

    if (recentPosts) {
      const categoriesRes = await getCategories();
      const { categories } = categoriesRes.data;

      recentPosts.forEach((post: any) => {
        post.category = getCategoryNameById(post.category, categories);
      });
    }

    setRecentPostData(recentPosts);
  };

  const timelineItems = () => {
    if (!recentPostData) return null;

    return recentPostData.map((post: any, key) => {
      let content = extractTextAndRemoveSpaces(post.content);
      content = limitChars(content, 300);
      return (
        <Timeline.Item key={key}>
          <Timeline.Point />
          <Timeline.Content className='flex flex-col gap-2'>
            <Timeline.Time>{formatDate(post.createdOn)}</Timeline.Time>
            <div className='flex gap-4'>
              {getBadges(post.isPublished, post.category)}
            </div>
            <Timeline.Title className='text-slate-200'>
              {post.title}
            </Timeline.Title>
            <Timeline.Body className='text-slate-200'>{content}</Timeline.Body>
            <div className='flex justify-end gap-4 pt-4'>
              <button
                onClick={() => handleViewClick(post._id)}
                className='p-1 '
              >
                <AiFillEye color='yellow' className='w-8 h-8' />
              </button>
              <div className='w-1 border-r border-white opacity-50'></div>
              <button
                onClick={() => handleEditClick(post._id)}
                className='p-1 '
              >
                <AiFillEdit color='white' className='w-8 h-8' />
              </button>
              <div className='w-1 border-r border-white opacity-50'></div>
              <button onClick={() => handleDeleteClick(post)} className='p-1 '>
                <AiFillDelete color='#ba0000' className='w-8 h-8' />
              </button>
            </div>
          </Timeline.Content>
        </Timeline.Item>
      );
    });
  };

  function extractTextAndRemoveSpaces(htmlString: string): string {
    // Convert escaped HTML tags to actual HTML tags
    const decodedString = he.decode(htmlString);

    // Replace non-breaking space entities with a space
    const stringWithoutNbsp = decodedString.replace(/&nbsp;/g, ' ');

    // Remove HTML tags
    const strippedString = stringWithoutNbsp.replace(/<\/?[^>]+(>|$)/g, '');

    // Replace multiple whitespaces with a single space
    const trimmedString = strippedString.replace(/\s+/g, ' ').trim();

    return trimmedString;
  }

  const handleDeleteClick = (post: IPost) => {
    setSelectedPost(post);
    setOpenModal(true);
  };

  const handleEditClick = (id: any) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    const deletePost = async (id: any) => {
      try {
        const res = await axios.delete(
          `https://blogging-wit-bits.fly.dev/posts/${id}`
        );
        if (res.status === 204) {
          setupData();
          if (isDashboard) navigate(`/dashboard/user/${id}`);
          else navigate(`/posts/user/${id}`);
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

  const getBadges = (isPublished: boolean, category: string) => {
    const isPublishedBadge = getIsPublishedBadge(isPublished);
    const categoryBadge = getCategoryBadge(category);
    return (
      <>
        {isPublishedBadge}
        {categoryBadge}
      </>
    );
  };

  const getCategoryBadge = (category: string) => {
    return <Badge color='purple'>{category}</Badge>;
  };

  const getIsPublishedBadge = (isPublished: boolean) => {
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
