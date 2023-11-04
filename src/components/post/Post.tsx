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
    <div>
      {markdown ? (
        <div dangerouslySetInnerHTML={createMarkup(markdown)}></div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default Post;
