import Markdown from 'react-markdown';
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Post() {
  const { id } = useParams();
  const [markdown, setMarkdown] = React.useState<string | null>(null);
  React.useEffect(() => {
    const fetchMarkdown = async () => {
      return await axios.get(`http://localhost:3000/posts/${id}`);
    };

    const setMarkdownData = async () => {
      const response: any = await fetchMarkdown();
      if (response.status === 200) {
        const markdown = response.data.content;
        setMarkdown(markdown);
      }
    };

    setMarkdownData();
  }, []);

  return <Markdown>{markdown && markdown}</Markdown>;
}

export default Post;
