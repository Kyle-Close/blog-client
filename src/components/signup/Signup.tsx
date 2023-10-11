import Header from "../header/Header";
import axios from "axios";
import React from "react";
import SignupForm from "./SignupForm";

import { useNavigate } from "react-router-dom";
import { areAllFieldsPopulated } from "../../helpers/util";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    isAuthor: false,
  });
  const [errMsgs, setErrMsgs] = React.useState<string[]>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Check if fields are filled out
    if (!areAllFieldsPopulated(formData)) {
      const responseMsg: string[] = ["All fields must be filled out"];
      setErrMsgs(responseMsg);
      return;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      const responseMsg: string[] = ["Password miss-match!"];
      setErrMsgs(responseMsg);
      return;
    }

    // Send the request to create a new user with form data
    try {
      const response = await axios.post("http://localhost:3000/users", {
        username: formData.username,
        password: formData.password,
        isAuthor: false,
      });
      if (response) navigate("/");
    } catch (error: any) {
      const errorArray = error.response.data;
      const errorMsgs = errorArray.map((err: any) => err.msg);

      setErrMsgs(errorMsgs);
    }
  }

  React.useEffect(() => {
    console.log(errMsgs);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col gap-6 bg-header px-12 pt-20 h-full">
        <h3 className="font-semibold text-green-400 text-2xl">Sign Up</h3>
        <SignupForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
        {errMsgs && errMsgs.length > 0 ? (
          <ul className="list-disc">
            {errMsgs.map((msg, index) => (
              <li key={index} className="text-sm text-red-500">
                {msg}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Signup;
