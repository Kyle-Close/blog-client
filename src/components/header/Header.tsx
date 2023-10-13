import Menu from "./Menu";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";

// Assets
import menuImg from "../../assets/menu-icon.png";

function Header() {
  return (
    <div className={tw_headerContainer}>
      <div className={tw_leftSide}>
        <div className={tw_imgContainer}>
          <Menu menuImg={menuImg} />
        </div>
        <div className={tw_linksLeftSide}>
          <a href="/">Web Dev</a>
          <a href="/">Electronics</a>
          <a href="/">Gaming</a>
        </div>
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
  "sm:h-24",
  "bg-header",
  "shadow-md",
  "px-4",
  "sm:px-10",
  "relative",
].join(" ");

const tw_imgContainer = ["sm:hidden", "w-8"].join(" ");

const tw_rightSide = ["flex", "gap-2", "sm:gap-4", "text-sm"].join(" ");

const tw_linksLeftSide = [
  "hidden",
  "grow",
  "font-semibold",
  "sm:flex",
  "sm:gap-6",
  "md:gap-10",
  "md:text-lg",
].join(" ");

const tw_leftSide = ["flex", "grow"].join(" ");
