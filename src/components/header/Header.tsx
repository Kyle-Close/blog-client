import Menu from "./Menu";
import Logo from "./Logo";
import HeaderButton from "./HeaderButton";

// Assets
import menuImg from "../../assets/menu-icon.png";

function Header() {
  return (
    <div className="flex justify-between items-center border-b border-white h-16 bg-header shadow-md px-4 relative">
      <div className="w-8">
        <Menu menuImg={menuImg} />
      </div>
      <div className="flex gap-4 text-sm">
        <HeaderButton url="/signup" buttonColor="green" text="Sign up" />
        <HeaderButton url="/signin" buttonColor="blue" text="Log in" />
      </div>
      <Logo />
    </div>
  );
}

export default Header;
