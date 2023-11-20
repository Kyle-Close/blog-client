import React from 'react';
// Context
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../@types/user';

function LinkSection() {
  const { user } = React.useContext(UserContext) as UserContextType;
  const dashboardLink = user ? `/dashboard/user/${user.id}` : '/';
  return (
    <div className='flex gap-8 lg:gap-16'>
      <div className='flex flex-col gap-2'>
        <h4 className={tw_linkHeading}>Developer</h4>
        <a href='/posts/655a7d622fa19139a1840da1' className={tw_link}>
          About This Website
        </a>
        <a href='https://github.com/Kyle-Close' className={tw_link}>
          Github
        </a>
        <a href='/' className={tw_link}>
          {'Portfolio (Coming Soon)'}
        </a>
      </div>
      <div className='flex flex-col gap-2'>
        <h4 className={tw_linkHeading}>Authors</h4>
        <a href={dashboardLink} className={tw_link}>
          Dashboard
        </a>
      </div>
    </div>
  );
}

export default LinkSection;

const tw_linkHeading = [
  'font-semibold',
  'underline',
  'text-sm',
  'sm:text-md',
  'md:text-lg',
  'lg:text-xl',
].join(' ');

const tw_link = [
  'text-xs',
  'sm:text-sm',
  'md:text-md',
  'lg:text-lg',
  'text-blue-500',
].join(' ');
