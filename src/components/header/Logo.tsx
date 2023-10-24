import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className={tw_logoButton}>
      <div className={tw_logoCircle}>
        <h4 className={tw_logoText}>BB</h4>
      </div>
    </button>
  );
}

export default Logo;

const tw_logoButton = [
  "rounded-full",
  "w-16",
  "h-16",
  "bg-gradient-to-b",
  "from-orange-200",
  "to-gray-900",
  "p-1",
  "cursor-pointer",
  "mt-8",
].join(" ");

const tw_logoCircle = [
  "h-full",
  "w-full",
  "flex",
  "justify-center",
  "items-center",
  "bg-header",
  "rounded-full",
].join(" ");

const tw_logoText = ["relative", "z-20", "font-semibold", "text-xl"].join(" ");
