import React from 'react';
import PopularPosts from './popular-posts/PopularPosts';
import QuoteSection from './quote-section/QuoteSection';
import AuthorshipGateway from './authorship-gateway/AuthorshipGateway';
import RecentPosts from './recent-posts/RecentPosts';
// Context
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../@types/user';

function LandingPage() {
  const { user } = React.useContext(UserContext) as UserContextType;
  const isAuthor = user && user.isAuthor ? true : false;
  return (
    <>
      <PopularPosts />
      <QuoteSection />
      <AuthorshipGateway isAuthor={isAuthor} />
      <RecentPosts />
    </>
  );
}

export default LandingPage;
