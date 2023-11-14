import Footer from '../footer/Footer';
import AuthorPostsTable from './AuthorPostsTable';

import { Button } from 'flowbite-react';

function AuthorDashboard() {
  return (
    <div className='flex flex-col grow'>
      <div className='px-6 py-10 flex flex-col gap-8 grow'>
        <h3 className='text-xl text-center'>Welcome to your dashboard Kyle!</h3>
        <Button color='success'>Create Blog Post</Button>
        <AuthorPostsTable />
      </div>
      <Footer />
    </div>
  );
}

export default AuthorDashboard;
