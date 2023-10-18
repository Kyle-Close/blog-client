import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";
import { useNavigate } from "react-router-dom";

// Assets
import menuImg from "../../assets/menu-icon.png";

// Context
import { UserContext } from "../../context/userContext";
import { UserContextType } from "../../@types/user";

interface HeaderProps {
  openMenu: () => void;
}

function Header({ openMenu }: HeaderProps) {
  const { user, logout } = React.useContext(UserContext) as UserContextType;
  const navigate = useNavigate();

  return (
    <div className={tw_headerContainer}>
      <div className={tw_leftSide}>
        <div className={tw_imgContainer}>
          <Menu openMenu={openMenu} menuImg={menuImg} />
        </div>
        <div className={tw_linksLeftSide}>
          <a href="/">Web Dev</a>
          <a href="/">Electronics</a>
          <a href="/">Gaming</a>
        </div>
      </div>
      <div className={tw_rightSide}>
        <a className={tw_allPosts} href="/">
          All Posts
        </a>
        <div className={tw_buttonContainer}>
          {user ? (
            <HeaderButton
              buttonColor="red-700"
              text="Logout"
              handleClick={async () => await logout()}
            />
          ) : (
            <>
              <HeaderButton
                buttonColor="green-800"
                text="Sign up"
                handleClick={() => navigate("/signup")}
              />
              <HeaderButton
                buttonColor="blue"
                text="Log in"
                handleClick={() => navigate("/login")}
              />
            </>
          )}
        </div>
      </div>
      <div className={tw_logoContainer}>
        <Logo />
      </div>
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

const tw_rightSide = [
  "flex",
  "justify-center",
  "items-center",
  "gap-4",
  "sm:gap-",
].join(" ");

const tw_linksLeftSide = [
  "hidden",
  "grow",
  "font-semibold",
  "sm:flex",
  "sm:gap-6",
  "md:gap-10",
  "lg:gap-16",
  "md:text-lg",
].join(" ");

const tw_leftSide = ["flex-1"].join(" ");

const tw_allPosts = [
  "hidden",
  "bg-clip-text",
  "text-transparent",
  "font-semibold",
  "text-md",
  "md:text-lg",
  "sm:flex",
  "bg-gradient-to-r",
  "from-pink-500",
  "to-red-600",
].join(" ");

const tw_buttonContainer = [
  "flex",
  "gap-2",
  "sm:gap-4",
  "md:gap-8",
  "md:pl-2",
  "lg:pl-16",
  "xl:pl-32",
].join(" ");

const tw_logoContainer = [
  "absolute",
  "bottom-0",
  "transform",
  "translate-y-1/2",
  "left-1/2",
  "-translate-x-1/2",
].join(" ");
