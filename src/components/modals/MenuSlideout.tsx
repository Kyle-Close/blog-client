import React from "react";

interface MenuSlideoutProps {
  closeMenu: () => void;
}

function MenuSlideout({ closeMenu }: MenuSlideoutProps) {
  React.useEffect(() => {
    const handleClick = (e) => {
      console.log(e);
    };

    document.addEventListener("mousedown", handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="box fixed top-0 left-[-100%] transform translate-x-[150%] transition duration-500 ease-in-out h-screen w-2/3 bg-menu z-50"></div>
  );
}

export default MenuSlideout;
