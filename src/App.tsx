import React from "react";
// Components
import Header from "./components/header/Header";
import MenuSlideout from "./components/modals/MenuSlideout";

// CSS
import "./index.css";

function App({ children }: any) {
  const [displayMenu, setDisplayMenu] = React.useState(false);

  const openMenu = () => {
    console.log("opening menu");
    setTimeout(() => {
      setDisplayMenu(true);
    }, 10);
  };

  const closeMenu = () => {
    setDisplayMenu(false);
  };

  return (
    <>
      {displayMenu && <MenuSlideout closeMenu={closeMenu} />}

      <Header openMenu={openMenu} />
      {children}
    </>
  );
}

export default App;
