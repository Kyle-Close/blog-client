import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselSlide from './CarouselSlide';
import { QuoteData } from '../../../data/quotes';
import { Carousel } from 'react-responsive-carousel';

function QuoteSection() {
  const Slides = QuoteData.map((data, key) => {
    return (
      <CarouselSlide
        key={key}
        authorImg={data.authorImg}
        quote={data.quote}
        authorFullName={data.authorFullName}
        authorPosition={data.authorPosition}
      />
    );
  });

  return (
    <div className={tw_quoteSectionWrapper}>
      <div className='w-full lg:w-1/2'>
        <Carousel
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
        >
          {Slides}
        </Carousel>
      </div>
    </div>
  );
}

export default QuoteSection;

const tw_quoteSectionWrapper = [
  'bg-neutral-300',
  'flex',
  'justify-center',
].join(' ');
