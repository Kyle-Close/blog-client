import React from 'react';
import axios from 'axios';
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
    return { __html: htmlString };
  };

  return (
    <div className='flex grow justify-center'>
      <div className='flex flex-col pt-10 px-4 bg-card shadow-xl shadow-black'>
        <div className='flex flex-col items-center gap-2 pb-4 border-b border-gray-600'>
          <h3 className='text-2xl text-center'>
            What is a Digital Product Manager? Role Overview, Skills & Salary
          </h3>
          <div className='flex gap-2 justify-between flex-wrap text-xs text-gray-300'>
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
