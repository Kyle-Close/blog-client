import React from 'react';
import jwt_decode from 'jwt-decode';
import ThemeProvider from '@mui/system/ThemeProvider';
import axios from 'axios';

// Components
import Header from './components/header/Header';
import MenuSlideout from './components/modals/MenuSlideout';

// CSS
import './index.css';

// Context
import { UserContext } from './context/userContext';
import { UserContextType } from './@types/user';
import { theme } from './Theme';

function App({ children }: any) {
  const { login } = React.useContext(UserContext) as UserContextType;
  const [displayMenu, setDisplayMenu] = React.useState(false);

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${localStorage.getItem('token')}`;

  const openMenu = () => {
    setTimeout(() => {
      setDisplayMenu(true);
    }, 10);
  };

  const closeMenu = () => {
    setDisplayMenu(false);
  };

  React.useEffect(() => {
    const getToken = async () => {
      return localStorage.getItem('token');
    };

    const fetchData = async () => {
      const token = await getToken();

      // Decode token and perform actions based on the decoded data
      if (token) {
        try {
          const decodedToken: any = jwt_decode(token);
          const { _id, username, isAuthor } = decodedToken;
          login({ id: _id, username, isAuthor }, token);
        } catch (error) {
          console.error('Error decoding token:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {displayMenu && <MenuSlideout closeMenu={closeMenu} />}

      <Header openMenu={openMenu} />
      {children}
    </ThemeProvider>
  );
}

export default App;
