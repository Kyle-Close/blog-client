import LinkSection from './LinkSection';
import SubscribeSection from './SubscribeSection';

function Footer() {
  return (
    <div className='flex justify-center bg-neutral-800 p-6 lg:p-8'>
      <div className='flex justify-center gap-8 sm:gap-16 md:gap-32 lg:gap-64'>
        <LinkSection />
        <SubscribeSection />
      </div>
    </div>
  );
}

export default Footer;
