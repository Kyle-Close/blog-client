import { Button } from 'flowbite-react';
import { BsFillSendFill } from 'react-icons/bs';

interface SubmitButtonProps {
  submitPost: (e: any) => void;
  text: string;
}

function SubmitButton({ submitPost, text }: SubmitButtonProps) {
  return (
    <Button onClick={submitPost}>
      {text}
      <BsFillSendFill className='ml-2 h-5 w-5' />
    </Button>
  );
}

export default SubmitButton;
