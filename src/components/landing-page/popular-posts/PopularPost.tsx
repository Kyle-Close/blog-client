interface PopularPostProps {
  img: string;
  title: string;
  author: string;
}

function PopularPost({ img, title, author }: PopularPostProps) {
  return (
    <div className={tw_postContainer}>
      <img className={tw_postImg} src={img} />
      <p className={tw_postTitle}>{`${title}`}</p>

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
  "basis-32",
  "sm:basis-40",
  "lg:basis-52",
  "max-w-[8rem]",
  "sm:max-w-[10rem]",
  "lg:max-w-[14rem]",
  "bg-card",
  "pb-2",
  "sm:py-6",
  "lg:pt-10",
  "lg:pb-6",
  "pt-4",
  "px-3",
  "sm:px-6",
  "lg:px-8",
  "rounded-lg",
  "shadow-lg",
  "transform",
  "hover:scale-105",
  "duration-300",
  "ease-in-out",
  "hover:cursor-pointer",
  "hover:bg-neutral-700",
].join(" ");

const tw_postImg = [
  "self-center",
  "shadow-2xl",
  "border",
  "border-white",
  "rounded-lg",
  "w-20",
  "sm:w-24",
  "lg:w-32",
  "opacity-75",
].join(" ");

const tw_postTitle = [
  "text-xs",
  "sm:text-sm",
  "lg:text-md",
  "mt-3",
  "sm:mt-6",
  "lg:mt-8",
  "font-medium",
  "line-clamp-2",
  "grow",
].join(" ");

const tw_postAuthor = [
  "flex",
  "flex-nowrap",
  "gap-1",
  "max-w-full",
  "text-2xs",
  "sm:text-xs",
  "lg:text-sm",
  "pt-2",
  "font-medium",
].join(" ");

const tw_postAuthorSpan = [
  "text-red-600",
  "text-ellipsis",
  "overflow-hidden",
  "font-normal",
].join(" ");
