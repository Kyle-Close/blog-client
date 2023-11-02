import Button from '@mui/material/Button';

function SubscribeSection() {
  return (
    <form className='flex flex-col gap-2 overflow-hidden text-xs md:text-sm lg:text-lg'>
      <label className='text-yellow-500 italic font-light text-center'>
        Get notified when new articles are published!
      </label>
      <input className='py-1 px-2' placeholder='example@gmail.com'></input>
      <Button variant='contained'>Subscribe</Button>
    </form>
  );
}

export default SubscribeSection;
