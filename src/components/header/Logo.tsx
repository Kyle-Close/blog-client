import { useNavigate } from "react-router-dom";

function Logo() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="rounded-full w-16 h-16 bg-gradient-to-b from-orange-200 to-gray-900 p-1 cursor-pointer"
    >
      <div className="h-full w-full flex justify-center items-center bg-header rounded-full">
        <h4 className="relative z-20 font-semibold text-xl">BB</h4>
      </div>
    </div>
  );
}

export default Logo;
