import Menu from "./Menu";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";

// Assets
import menuImg from "../../assets/menu-icon.png";

function Header() {
  return (
    <div className={tw_headerContainer}>
      <div className={tw_imgContainer}>
        <Menu menuImg={menuImg} />
      </div>
      <div className={tw_rightSide}>
        <HeaderButton url="/signup" buttonColor="green" text="Sign up" />
        <HeaderButton url="/signin" buttonColor="blue" text="Log in" />
      </div>
      <Logo />
    </div>
  );
}

export default Header;

const tw_headerContainer = [
  "flex",
  "justify-between",
  "items-center",
  "border-b",
  "border-white",
  "h-16",
  "bg-header",
  "shadow-md",
  "px-4",
  "relative",
].join(" ");

const tw_imgContainer = ["w-8"].join(" ");

const tw_rightSide = ["flex", "gap-2", "text-sm"].join(" ");
