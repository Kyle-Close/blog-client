import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import { useNavigate } from "react-router-dom";

// Material UI Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
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

  const GetHeaderButtons = () => {
    let result;
    const isLoggedIn = user ? true : false;
    let isAuthor = user?.isAuthor ? true : false;

    const signupButton = (
      <button onClick={() => navigate("/signup")}>
        <PersonAddAlt1Icon fontSize="large" color="primary" />
      </button>
    );
    const loginButton = (
      <button onClick={() => navigate("/login")}>
        <LoginIcon fontSize="large" sx={{ color: "green" }} />
      </button>
    );
    const logoutButton = (
      <button onClick={() => logout()}>
        <LogoutIcon fontSize="large" color="error" />
      </button>
    );
    const dashboardButton = (
      <button onClick={() => navigate("/")}>
        <DashboardIcon fontSize="large" color="inherit" />
      </button>
    );

    if (isLoggedIn && isAuthor) {
      result = (
        <>
          {dashboardButton}
          {logoutButton}
        </>
      );
    } else if (isLoggedIn && !isAuthor) {
      result = <>{logoutButton}</>;
    } else if (!isLoggedIn) {
      result = (
        <>
          {signupButton}
          {loginButton}
        </>
      );
    }

    return result;
  };

  return (
    <div className={tw_widthWrapper}>
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
          <div className={tw_buttonContainer}>{GetHeaderButtons()}</div>
        </div>
        <div className={tw_logoContainer}>
          <Logo />
        </div>
      </div>
    </div>
  );
}

export default Header;

const tw_widthWrapper = [
  "bg-header",
  "flex",
  "justify-center",
  "border-b",
  "border-white",
  "shadow-md",
  "px-4",
  "sm:px-8",
  "h-16",
  "sm:h-38",
].join(" ");

const tw_headerContainer = [
  "flex",
  "justify-between",
  "items-center",
  "relative",
  "max-w-screen-lg",
  "grow",
].join(" ");

const tw_imgContainer = ["sm:hidden", "w-8"].join(" ");

const tw_rightSide = [
  "flex",
  "justify-center",
  "items-center",
  "gap-4",
  "sm:gap-8",
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
