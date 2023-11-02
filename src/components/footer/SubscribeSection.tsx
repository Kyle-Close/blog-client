import Button from '@mui/material/Button';

function SubscribeSection() {
  return (
    <form className='flex flex-col gap-2 overflow-hidden'>
      <Button variant='outlined'>Subscribe</Button>
      <input
        className='text-xs py-1 px-2'
        placeholder='example@gmail.com'
      ></input>
    </form>
  );
}

export default SubscribeSection;
