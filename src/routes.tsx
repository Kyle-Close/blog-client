import App from './App';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import LandingPage from './components/landing-page/LandingPage';
import CreatePost from './components/create-post/CreatePost';
import Post from './components/post/Post';

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
];

export default routes;
