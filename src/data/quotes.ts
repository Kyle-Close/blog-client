import authorImg from '../assets/portrait1.jpg';
import robotImg from '../assets/robot.png';

export interface IQuoteData {
  authorImg: string;
  quote: string;
  authorFullName: string;
  authorPosition: string;
}

export const QuoteData: IQuoteData[] = [
  {
    authorImg: robotImg,
    quote:
      'Web development: where I turn caffeine into code and errors into experiences. Because flawless is overrated.',
    authorFullName: 'ChatGPT',
    authorPosition: 'Chief Wizard of Witty Words',
  },
  {
    authorImg: robotImg,
    quote:
      'Respawn in games: a second chance at glory. Respawn in real life: well, a nap usually helps.',
    authorFullName: 'ChatGPT',
    authorPosition: 'Chief Respawn Strategist.',
  },
];
