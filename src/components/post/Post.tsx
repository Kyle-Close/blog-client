import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { formatDate } from '../../helpers/util';

interface PostData {
  _id: string;
  title: string;
  createdBy: string;
  createdOn: string;
  content: string;
  isPublished: boolean;
}

function Post() {
  const { id } = useParams();

  const [postData, setPostData] = React.useState<PostData | null>(null);

  React.useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        if (response.status === 200) {
          const rawPostData: PostData = response.data;
          const author: string = await fetchAuthor(response.data.createdBy);
          if (author) {
            rawPostData.createdBy = author.toUpperCase();
            setPostData(rawPostData);
          }
        }
      } catch (error) {
        console.error('Error fetching markdown:', error);
      }
    };

    const fetchAuthor = async (id: string) => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        if (response.status === 200) {
          return response.data.user.username;
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPostData();
  }, [id]);

  const createMarkup = (htmlString: string) => {
    return { __html: parse(htmlString) };
  };

  return (
    <div className={tw_wrapper}>
      <div className={tw_postContainer}>
        {postData && (
          <>
            <div className={tw_postHeader}>
              <h3 className={tw_title}>{postData.title}</h3>

              <div className={tw_authorAndDate}>
                <p>
                  <span className='font-semibold'>BY</span> {postData.createdBy}
                </p>
                <p>
                  <span className='font-semibold'>CREATED ON</span>{' '}
                  {formatDate(postData.createdOn)}
                </p>
              </div>
            </div>

            <div className='pt-4'>
              <div
                dangerouslySetInnerHTML={createMarkup(postData.content)}
              ></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Post;

const tw_wrapper = ['flex', 'grow', 'justify-center'].join(' ');

const tw_postContainer = [
  'flex',
  'flex-col',
  'md:gap-4',
  'lg:gap-8',
  'pt-10',
  'px-4',
  'bg-card',
  'shadow-xl',
  'shadow-black',
  'sm:px-8',
  'sm:py-12',
  'xl:w-1/2',
].join(' ');

const tw_postHeader = [
  'flex',
  'flex-col',
  'items-center',
  'gap-2',
  'xl:gap-6',
  'pb-4',
  'border-b',
  'border-gray-600',
].join(' ');

const tw_title = ['text-2xl', 'md:text-3xl', 'text-center'].join(' ');

const tw_authorAndDate = [
  'flex',
  'gap-2',
  'sm:gap-4',
  'md:gap-8',
  'lg:gap-12',
  'justify-between',
  'flex-wrap',
  'text-xs',
  'md:text-sm',
  'text-gray-300',
].join(' ');
