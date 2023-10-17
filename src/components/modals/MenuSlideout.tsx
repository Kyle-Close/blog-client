import React from "react";
import Logo from "../header/Logo";
import { menuLinks } from "../../data/menu-links";

interface MenuSlideoutProps {
  closeMenu: () => void;
}

function MenuSlideout({ closeMenu }: MenuSlideoutProps) {
  const menuClassNames = getMenuClassNames("left");

  React.useEffect(() => {
    const handleClick = (e: any) => {
      const parentDiv = document.getElementsByClassName("menu")[0]; // Get the first element with class "menu"

      // Check if the click event target is the parent div or one of its descendants
      if (
        parentDiv &&
        (e.target === parentDiv || parentDiv.contains(e.target))
      ) {
      } else {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const links = menuLinks.map((link) => {
    return (
      <div className={tw_linkContainer}>
        <a className={tw_link} href={link.href}>
          {link.title}
        </a>
      </div>
    );
  });

  return (
    <div className={menuClassNames}>
      <div className="flex gap-4 items-end">
        <Logo />
        <h1 className={tw_title}>Blogging w Bits</h1>
      </div>
      <div className={tw_linkSection}>{links}</div>
    </div>
  );
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
    "px-6",
    "py-4",
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

const tw_linkSection = ["grow", "flex", "flex-col px-4"].join(" ");

const tw_title = [
  "font-semibold",
  "text-lg",
  "underline",
  "bg-clip-text",
  "text-transparent",
  "bg-gradient-to-b",
  "from-orange-200",
  "to-gray-600",
].join(" ");

const tw_linkContainer = ["pt-8", "pb-4", "border-b"].join(" ");

const tw_link = ["text-xl", "font-semibold"].join(" ");
