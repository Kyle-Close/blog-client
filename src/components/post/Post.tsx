import React from 'react';
import axios from 'axios';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const [markdown, setMarkdown] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        if (response.status === 200) {
          const fetchedMarkdown = response.data.content;
          setMarkdown(fetchedMarkdown);
        }
      } catch (error) {
        console.error('Error fetching markdown:', error);
      }
    };

    fetchMarkdown();
  }, [id]);

  const createMarkup = (htmlString: string) => {
    return { __html: parse(htmlString) };
  };

  return (
    <div className={tw_wrapper}>
      <div className={tw_postContainer}>
        <div className={tw_postHeader}>
          <h3 className={tw_title}>
            What is a Digital Product Manager? Role Overview, Skills & Salary
          </h3>
          <div className={tw_authorAndDate}>
            <p>
              <span className='font-semibold'>BY</span> NATASCHA ASBERGER
            </p>
            <p>
              <span className='font-semibold'>UPDATED ON</span> NOVEMBER 2, 2023
            </p>
          </div>
        </div>
        {markdown ? (
          <div className='pt-4'>
            <div dangerouslySetInnerHTML={createMarkup(markdown)}></div>
          </div>
        ) : (
          'Loading...'
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
  'sm:pt-16',
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
