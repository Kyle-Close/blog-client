import axios from 'axios';
import React from 'react';
import LoginForm from './LoginForm';

import { areAllFieldsPopulated } from '../../helpers/util';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { UserContextType } from '../../@types/user';

function Login() {
  const navigate = useNavigate();
  const { login } = React.useContext(UserContext) as UserContextType;
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
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
      const responseMsg: string[] = ['All fields must be filled out'];
      setErrMsgs(responseMsg);
      return;
    }

    // Send the request to TODO : login
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username: formData.username,
        password: formData.password,
      });
      if (response) {
        // Login
        const { _id, token, username, isAuthor } = response.data.user;
        const user = {
          id: _id,
          username: username,
          isAuthor: isAuthor,
        };
        login(user, token);
        navigate('/');
        return;
      }
    } catch (error: any) {
      const errorMsg = error.response.data.msg;

      setErrMsgs([errorMsg]);
    }
  }

  return (
    <div className={tw_signupContentContainer}>
      <h3 className={tw_signupTitle}>Login</h3>
      <LoginForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        formData={formData}
      />
      {errMsgs && errMsgs.length > 0 ? (
        <ul className='list-disc'>
          {errMsgs.map((msg, index) => (
            <li key={index} className='text-sm text-red-500'>
              {msg}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Login;

const tw_signupContentContainer = [
  'grow',
  'flex',
  'flex-col',
  'gap-6',
  'sm:items-center',
  'bg-header',
  'px-12',
  'pt-20',
].join(' ');

const tw_signupTitle = ['font-semibold', 'text-green-400', 'text-2xl'].join(
  ' '
);
