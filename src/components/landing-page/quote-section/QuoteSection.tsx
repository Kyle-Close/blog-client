import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselSlide from './CarouselSlide';
import { QuoteData } from '../../../data/quotes';
import { Carousel } from 'react-responsive-carousel';

function QuoteSection() {
  const Slides = QuoteData.map((data) => {
    return (
      <CarouselSlide
        authorImg={data.authorImg}
        quote={data.quote}
        authorFullName={data.authorFullName}
        authorPosition={data.authorPosition}
      />
    );
  });

  return (
    <div className={tw_quoteSectionWrapper}>
      <div className='w-full'>
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

const tw_quoteSectionWrapper = ['bg-zinc-800', 'flex', 'justify-center'].join(
  ' '
);
