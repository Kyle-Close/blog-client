import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { Button as FlowbiteButton, Modal } from 'flowbite-react';
import { useState, useContext } from 'react';
import axios from 'axios';

// Context
import { UserContext } from '../../../context/userContext';
import { UserContextType } from '../../../@types/user';

interface IAuthorshipGatewayProps {
  isAuthor: boolean;
  userId?: string;
}

function AuthorshipGateway({ isAuthor, userId }: IAuthorshipGatewayProps) {
  const { user, updateUser } = useContext(UserContext) as UserContextType;
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const title = isAuthor ? 'Author Dashboard' : 'Become an Author';
  const buttonColor = isAuthor ? 'secondary' : 'primary';

  const getBodyText = () => {
    if (userId) {
      return isAuthor
        ? 'Want to create, edit, or delete a post Author? Click below to visit your dashboard!'
        : 'Have a tech topic you want to discuss and share on Blogging with Bits? Apply below to become an Author!';
    }

    return 'Please login to use the Author dashboard.';
  };

  const getLink = () => {
    if (userId) return 'dashboard/user/${userId}';
    else return '/login';
  };

  const getButtonText = () => {
    if (userId) {
      return isAuthor ? 'Dashboard' : 'Apply';
    }
    return 'Login';
  };

  const handleButtonClick = () => {
    if (userId && !isAuthor) {
      setOpenModal(true);
    } else {
      navigate(getLink());
    }
  };

  const handleModalApply = async () => {
    const response = await axios.patch(
      `http://localhost:3000/make_user_author/${user?.id}`
    );

    console.log(response);
    if (response.status === 200) {
      // update user
      updateUser({ isAuthor: true });
      const newToken = response.data.token;
      localStorage.setItem('token', newToken);
      setOpenModal(false);
    }
  };

  return (
    <div className={tw_widthWrapper}>
      <div className={tw_container}>
        <h3 className={tw_title}>{title}</h3>
        <p className={tw_body}>{getBodyText()}</p>
        <Button
          onClick={() => handleButtonClick()}
          variant='contained'
          size='large'
          color={buttonColor}
        >
          {getButtonText()}
        </Button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Apply to be an Author</Modal.Header>
        <Modal.Body>
          <div className='space-y-6'>
            <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
              Unlock the power of authorship! As an author, you gain the ability
              to publish captivating blog posts across various categories. Take
              control of your content by effortlessly editing and deleting your
              own posts, personalizing your creative space on our platform.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <FlowbiteButton onClick={() => handleModalApply()}>
            Apply Now
          </FlowbiteButton>
          <FlowbiteButton color='gray' onClick={() => setOpenModal(false)}>
            Nevermind
          </FlowbiteButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AuthorshipGateway;

const tw_widthWrapper = [
  'flex',
  'justify-center',
  'bg-neutral-800',
  'text-black',
  'p-10',
  'lg:p-18',
].join(' ');

const tw_container = [
  'flex',
  'flex-col',
  'items-center',
  'gap-6',
  'max-w-lg',
].join(' ');

const tw_title = [
  'text-2xl',
  'md:text-3xl',
  'font-semibold',
  'text-white',
].join(' ');

const tw_body = [
  'text-center',
  'p-8',
  'rounded-lg',
  'bg-neutral-200',
  'mb-4',
  'shadow-lg',
  'shadow-neutral-800',
  'sm:font-medium',
  'md:text-md',
  'lg:text-lg',
].join(' ');
