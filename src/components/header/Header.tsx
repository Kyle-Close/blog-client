import Menu from "./Menu";
import Logo from "./Logo";

// Assets
import menuImg from "../../assets/menu-icon.png";

function Header() {
  return (
    <div className="flex border-b border-white h-16 bg-header shadow-md p-4 relative">
      <div className="w-8">
        <Menu menuImg={menuImg} />
      </div>
      <Logo />
    </div>
  );
}

export default Header;
