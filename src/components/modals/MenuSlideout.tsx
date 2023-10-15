import React from "react";

interface MenuSlideoutProps {
  closeMenu: () => void;
}

function MenuSlideout({ closeMenu }: MenuSlideoutProps) {
  const menuClassNames = getMenuClassNames("left");

  React.useEffect(() => {
    const handleClick = (e: any) => {
      const { classList } = e.target;

      if (!classList.contains("menu")) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return <div className={menuClassNames}></div>;
}

function getMenuClassNames(direction: string) {
  const classNames = [
    "menu",
    "flex",
    "flex-col",
    "bg-menu",
    "absolute",
    "max-h-screen",
    "overflow-y-auto",
    "z-50",
  ];

  if (direction === "left" || direction === "right") {
    classNames.push("w-2/3");
    classNames.push("inset-y-0");
  }

  switch (direction) {
    case "left":
      classNames.push("animate-slideInLeft");
      classNames.push("left-0");
      break;
    case "right":
      classNames.push("animate-slideInRight");
      classNames.push("right-0");
      break;
    case "bottom":
      classNames.push("animate-slideUp");
      classNames.push("h-40");
      classNames.push("inset-x-0");
      classNames.push("bottom-0");
      break;
  }

  return classNames.join(" ");
}

export default MenuSlideout;
