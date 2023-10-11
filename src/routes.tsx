import App from "./App";
import Signup from "./components/signup/Signup";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  // Add more routes as needed
];

export default routes;
