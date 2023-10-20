interface PopularPostProps {
  img: string;
  title: string;
  author: string;
}

function PopularPost({ img, title, author }: PopularPostProps) {
  return (
    <div className="flex flex-col w-28 items-center">
      <img className="rounded-full w-20" src={img} />
      <p className="text-xs text-center pt-2 font-medium">{title}</p>
      <p className="text-xs">
        By: <span className="text-red-600">{author}</span>
      </p>
    </div>
  );
}

export default PopularPost;
