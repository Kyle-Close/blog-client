import Button from '@mui/material/Button';

interface IAuthorshipGatewayProps {
  isAuthor: boolean;
}

function AuthorshipGateway({ isAuthor }: IAuthorshipGatewayProps) {
  const title = isAuthor ? 'Author Dashboard' : 'Become an Author';
  const body = isAuthor
    ? 'Have a tech topic you want to discuss and share on Blogging with Bits? Apply below to become an Author!'
    : 'On the author dashboard you can publish posts, edit posts, delete posts, and more.';
  const buttonText = isAuthor ? 'Dashboard' : 'Apply';
  const buttonColor = isAuthor ? 'secondary' : 'primary';
  return (
    <div className={tw_widthWrapper}>
      <div className={tw_container}>
        <h3 className={tw_title}>{title}</h3>
        <p className={tw_body}>{body}</p>
        <Button variant='contained' size='large' color={buttonColor}>
          {buttonText}
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
].join(' ');
