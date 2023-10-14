import { useNavigate } from "react-router-dom";

interface HeaderButtonProps {
  text: string;
  buttonColor: string;
  url: string;
}

function HeaderButton({ text, buttonColor, url }: HeaderButtonProps) {
  const navigate = useNavigate();
  return (
    <button
      className={tw_button}
      style={{ backgroundColor: buttonColor }}
      onClick={() => navigate(url)}
    >
      <h4>{text}</h4>
    </button>
  );
}

export default HeaderButton;

const tw_button = [
  "text-sm",
  "sm:font-semibold",
  "md:text-md",
  "h-8",
  "sm:h-10",
  "w-16",
  "sm:w-20",
  "md:w-24",
  "rounded-md",
  "shadow-lg",
  "hover:shadow-3xl",
  "border",
  "border-black",
].join(" ");
