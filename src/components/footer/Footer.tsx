import LinkSection from './LinkSection';
import SubscribeSection from './SubscribeSection';

function Footer() {
  return (
    <div className='flex gap-8 bg-neutral-800 p-6'>
      <LinkSection />
      <SubscribeSection />
    </div>
  );
}

export default Footer;
