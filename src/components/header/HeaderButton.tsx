interface HeaderButtonProps {
  text: string;
  buttonColor: string;
  handleClick: any;
}

function HeaderButton({ text, buttonColor, handleClick }: HeaderButtonProps) {
  const green = "bg-green-800";
  const red = "bg-red-700";
  const tw_button = getButtonClasses(buttonColor);
  return (
    <button
      className={tw_button}
      style={{ backgroundColor: buttonColor }}
      onClick={handleClick}
    >
      <h4>{text}</h4>
    </button>
  );
}

const getButtonClasses = (color: string) => {
  const tw_button = [
    "text-sm",
    "sm:font-semibold",
    "md:text-md",
    "h-8",
    "sm:h-10",
    "w-16",
    "sm:w-20",
    "md:w-24",
    "rounded-md",
    "shadow-lg",
    "hover:shadow-3xl",
    "border",
    "border-black",
  ];
  if (color) tw_button.push(`bg-${color}`);
  return tw_button.join(" ");
};

export default HeaderButton;
