import { IQuoteData } from '../../../data/quotes';
import quoteIcon from '../../../assets/quoteIcon.svg';

function CarouselSlide({
  authorImg,
  quote,
  authorFullName,
  authorPosition,
}: IQuoteData) {
  return (
    <div className={tw_carouselContentContainer}>
      <div className={tw_personImageContainer}>
        <img src={authorImg} />
      </div>
      <div className={tw_quoteContainer}>
        <div className={tw_quoteIconContainer}>
          <img src={quoteIcon} />
        </div>
        <p>{quote}</p>
        <div className={tw_quoteAuthorSection}>
          <p className='font-medium'>{authorFullName}</p>
          <p>{authorPosition}</p>
        </div>
      </div>
    </div>
  );
}

export default CarouselSlide;

const tw_carouselContentContainer = [
  'flex',
  'flex-col',
  'items-center',
  'py-8',
  'gap-8',
].join(' ');

const tw_personImageContainer = [
  'basis-2/5',
  'max-w-[40%]',
  'border-2',
  'rounded-md',
  'shadow-sm',
  'shadow-white',
].join(' ');

const tw_quoteContainer = [
  'p-4',
  'mb-4',
  'text-start',
  'flex',
  'flex-col',
  'items-start',
  'gap-4',
  'bg-slate-900',
  'w-64',
  'rounded-lg',
  'text-sm',
].join(' ');

const tw_quoteIconContainer = ['w-10'].join(' ');

const tw_quoteAuthorSection = [
  'flex',
  'flex-col',
  'items-start',
  'text-xs',
].join(' ');
