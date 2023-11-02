function LinkSection() {
  return (
    <div className='flex gap-8'>
      <div className='flex flex-col gap-2'>
        <h4 className='font-semibold underline text-md'>Developer</h4>
        <a className='text-sm'>About</a>
        <a className='text-sm'>Github</a>
        <a className='text-sm'>Portfolio</a>
      </div>
      <div className='flex flex-col gap-2'>
        <h4 className='font-semibold underline text-md'>Authors</h4>
        <a className='text-sm'>Dashboard</a>
      </div>
    </div>
  );
}

export default LinkSection;
