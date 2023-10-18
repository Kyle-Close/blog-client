import App from "./App";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";

const routes = [
  {
    path: "/",
    element: (
      <App>
        <div></div>
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
