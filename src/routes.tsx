import App from './App';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import LandingPage from './components/landing-page/LandingPage';
import CreatePost from './components/create-post/CreatePost';
import Post from './components/post/Post';
import PostGroup from './components/post-group/PostGroup';

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
        <PostGroup />
      </App>
    ),
  },
];

export default routes;
