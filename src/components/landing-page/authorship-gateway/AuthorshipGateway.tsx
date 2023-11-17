import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';

interface IAuthorshipGatewayProps {
  isAuthor: boolean;
  userId?: string;
}

function AuthorshipGateway({ isAuthor, userId }: IAuthorshipGatewayProps) {
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
    if (userId) {
      return isAuthor ? `dashboard/user/${userId}` : '/';
    }
    return '/login';
  };

  const getButtonText = () => {
    if (userId) {
      return isAuthor ? 'Dashboard' : 'Apply';
    }
    return 'Login';
  };

  return (
    <div className={tw_widthWrapper}>
      <div className={tw_container}>
        <h3 className={tw_title}>{title}</h3>
        <p className={tw_body}>{getBodyText()}</p>
        <Button
          onClick={() => navigate(getLink())}
          variant='contained'
          size='large'
          color={buttonColor}
        >
          {getButtonText()}
        </Button>
      </div>
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
