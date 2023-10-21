interface PopularPostProps {
  img: string;
  title: string;
  author: string;
}

function PopularPost({ img, title, author }: PopularPostProps) {
  return (
    <div className={tw_postContainer}>
      <img className={tw_postImg} src={img} />
      <p className={tw_postTitle}>{"aksfdjkjafjafjioajfidjijfai"}</p>

      <p className={tw_postAuthor}>
        By:{" "}
        <span className={tw_postAuthorSpan}>
          {capitalizeFirstLetter(author)}
        </span>
      </p>
    </div>
  );
}

export default PopularPost;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

const tw_postContainer = [
  "flex",
  "flex-col",
  "w-28",
  "max-w-28",
  "items-center",
  "bg-card",
  "pb-2",
  "pt-4",
  "px-2",
  "rounded-lg",
  "shadow-lg",
  "transform",
  "hover:scale-105",
  "duration-300",
  "ease-in-out",
].join(" ");

const tw_postImg = [
  "shadow-2xl",
  "border",
  "border-white",
  "rounded-lg",
  "w-20",
  "opacity-75",
].join(" ");

const tw_postTitle = [
  "text-xs",
  "max-w-full",
  "pt-2",
  "font-medium",
  "h-10",
  "line-clamp-2",
].join(" ");

const tw_postAuthor = [
  "flex",
  "flex-nowrap",
  "gap-1",
  "max-w-full",
  "text-2xs",
  "pt-2",
].join(" ");

const tw_postAuthorSpan = [
  "text-red-600",
  "text-ellipsis",
  "overflow-hidden",
].join(" ");
