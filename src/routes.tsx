import App from "./App";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import LandingPage from "./components/landing-page/LandingPage";

const routes = [
  {
    path: "/",
    element: (
      <App>
        <LandingPage />
      </App>
    ),
  },
  {
    path: "/signup",
    element: (
      <App>
        <Signup />
      </App>
    ),
  },
  {
    path: "/login",
    element: (
      <App>
        <Login />
      </App>
    ),
  },
];

export default routes;
