import React from 'react';
import PostCard from './Card';
import img from '../../assets/office.jpg';
import { useParams } from 'react-router-dom';

import { IPostCard } from './Card';
import axios from 'axios';

function PostGroup() {
  const { id } = useParams();
  const [posts, setPosts] = React.useState<IPostCard | null>(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/posts/category/${id}`
        );
        if (res) {
          setPosts(res.data.posts);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);

  React.useEffect(() => {
    console.dir(posts);
  }, [posts]);

  return <PostCard title='test' content='some content' img={img} />;
}

export default PostGroup;
