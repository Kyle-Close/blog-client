import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';

interface RecentPostProps {
  img: string;
  title: string;
  content: string;
  url?: string;
}

function RecentPost({ img, title, content, url }: RecentPostProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (url) navigate(url);
  };

  const createMarkup = (htmlString: string) => {
    return { __html: parse(htmlString) };
  };

  return (
    <div onClick={handleButtonClick} className={tw_postContainer}>
      <button className={tw_imageButtonWrapper}>
        <img src={img} />
      </button>

      <div className={tw_titleContentSection}>
        <button onClick={handleButtonClick} className='text-start'>
          <h4 className={tw_title}>{title}</h4>
        </button>

        <div
          className={tw_content}
          dangerouslySetInnerHTML={createMarkup(content)}
        ></div>
      </div>
    </div>
  );
}

export default RecentPost;

const tw_postContainer = ['grid', 'grid-cols-2', 'gap-2', 'sm:gap-8'].join(' ');

const tw_imageButtonWrapper = ['border-2', 'border-black'].join(' ');

const tw_titleContentSection = ['flex', 'flex-col'].join(' ');

const tw_title = ['font-medium', 'sm:text-xl'].join(' ');

const tw_content = ['text-sm', 'sm:text-lg', 'line-clamp-3'].join(' ');
