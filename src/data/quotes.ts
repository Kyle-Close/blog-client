import authorImg from '../assets/portrait1.jpg';

export interface IQuoteData {
  authorImg: string;
  quote: string;
  authorFullName: string;
  authorPosition: string;
}

export const QuoteData: IQuoteData[] = [
  {
    authorImg: authorImg,
    quote:
      'Our people hold the keys to their own future. Pando helps empower people to understand where they’re at and how to move forward in their career.',
    authorFullName: 'Monica Matison',
    authorPosition: 'Vice President of People, Shipwell',
  },
  {
    authorImg: authorImg,
    quote:
      'Embracing chaos and creativity, we dance with algorithms and paint with pixels, shaping the digital universe one innovation at a time. Join us in this cosmic adventure!',
    authorFullName: 'Galaxy Gazer',
    authorPosition: 'Chief Creative Chaos Officer, Stellar Innovations Ltd.',
  },
];
