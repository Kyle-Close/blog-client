import App from "./App";
import Signup from "./components/signup/Signup";

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
  // Add more routes as needed
];

export default routes;
