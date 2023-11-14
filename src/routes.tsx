import App from './App';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import LandingPage from './components/landing-page/LandingPage';
import CreatePost from './components/create-post/CreatePost';
import Post from './components/post/Post';
import PostGroup from './components/post-group/PostGroup';
import AuthorDashboard from './components/author-dashboard/AuthorDashboard';
import AuthorPosts from './components/author-dashboard/AuthorPosts';

const routes = [
  {
    path: '/',
    element: (
      <App>
        <LandingPage />
      </App>
    ),
  },
  {
    path: '/signup',
    element: (
      <App>
        <Signup />
      </App>
    ),
  },
  {
    path: '/login',
    element: (
      <App>
        <Login />
      </App>
    ),
  },
  {
    path: '/create-post',
    element: (
      <App>
        <CreatePost />
      </App>
    ),
  },
  {
    path: '/posts/:id',
    element: (
      <App>
        <Post />
      </App>
    ),
  },
  {
    path: '/posts/category/:id',
    element: (
      <App>
        <PostGroup />
      </App>
    ),
  },
  {
    path: '/dashboard/user/:id',
    element: (
      <App>
        <AuthorDashboard />
      </App>
    ),
  },
  {
    path: '/posts/user/:id',
    element: (
      <App>
        <AuthorPosts />
      </App>
    ),
  },
  {
    path: '/update-post/:postId',
    element: (
      <App>
        <CreatePost />
      </App>
    ),
  },
];

export default routes;
