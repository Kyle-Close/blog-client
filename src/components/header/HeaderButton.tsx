import { useNavigate } from "react-router-dom";

function HeaderButton({ text, buttonColor, url }) {
  const navigate = useNavigate();
  return (
    <button
      className="h-8 w-16 rounded-md shadow-lg hover:shadow-xl border border-black"
      style={{ backgroundColor: buttonColor }}
      onClick={() => navigate(url)}
    >
      <h4>{text}</h4>
    </button>
  );
}

export default HeaderButton;
