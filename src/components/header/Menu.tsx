interface MenuProps {
  openMenu: () => void;
  menuImg: string;
}

function Menu({ menuImg, openMenu }: MenuProps) {
  return (
    <div onClick={openMenu} className="flex">
      <img src={menuImg} width={"100px"} />
    </div>
  );
}

export default Menu;
