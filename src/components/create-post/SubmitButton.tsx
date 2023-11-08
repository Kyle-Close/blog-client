import { Button } from 'flowbite-react';
import { BsFillSendFill } from 'react-icons/bs';

interface SubmitButtonProps {
  submitPost: (e: any) => void;
}

function SubmitButton({ submitPost }: SubmitButtonProps) {
  return (
    <Button onClick={submitPost}>
      Post
      <BsFillSendFill className='ml-2 h-5 w-5' />
    </Button>
  );
}

export default SubmitButton;
