import React from 'react';
import PostCard from './Card';
import img from '../../assets/office.jpg';
import { useParams } from 'react-router-dom';
import { limitChars } from '../../helpers/util';
import he from 'he';

import { IPostCard } from './Card';
import axios from 'axios';
import Footer from '../footer/Footer';

function PostGroup() {
  const { id } = useParams();
  const [posts, setPosts] = React.useState<IPostCard[] | null>(null);
  const [category, setCategory] = React.useState<string>('');

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [categoryResponse, postsResponse] = await Promise.all([
          axios.get(`http://localhost:3000/categories/${id}`),
          axios.get(`http://localhost:3000/posts/category/${id}`),
        ]);
        if (categoryResponse.status === 200 && postsResponse.status === 200) {
          let category = categoryResponse.data.category.category;
          setCategory(category.charAt(0).toUpperCase() + category.slice(1));
          setPosts(postsResponse.data.posts);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  const postCards = posts?.map((post, key) => {
    return (
      <PostCard
        key={key}
        _id={post._id}
        title={post.title}
        content={limitChars(extractTextAndRemoveSpaces(post.content), 150)}
        img={img}
      />
    );
  });

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

  return (
    <div className={tw_wrapper}>
      <div className={tw_cardAndTitleContainer}>
        <h3 className={tw_title}>{category}</h3>
        <div className={tw_cardsContainer}>{postCards}</div>
      </div>
      <Footer />
    </div>
  );
}

export default PostGroup;

const tw_wrapper = ['flex', 'flex-col', 'h-screen'].join(' ');

const tw_title = [
  'text-center',
  'sm:py-12',
  'md:pt-14',
  'lg:pt-16',
  'text-xl',
  'sm:text-2xl',
  'md:text-3xl',
  'lg:text-4xl',
  'font-semibold',
].join(' ');

const tw_cardAndTitleContainer = [
  'flex',
  'flex-col',
  'grow',
  'gap-6',
  'px-4',
  'sm:px-6',
  'md:px-10',
  'lg:px-16',
  'py-10',
  'sm:py-0',
].join(' ');

const tw_cardsContainer = [
  'flex',
  'flex-wrap',
  'gap-4',
  'sm:gap-8',
  'justify-center',
].join(' ');
