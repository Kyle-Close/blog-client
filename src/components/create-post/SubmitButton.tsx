import { Button } from 'flowbite-react';
import { BsFillSendFill } from 'react-icons/bs';

function SubmitButton() {
  return (
    <Button>
      Post
      <BsFillSendFill className='ml-2 h-5 w-5' />
    </Button>
  );
}

export default SubmitButton;
