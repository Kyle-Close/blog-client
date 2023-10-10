function Logo() {
  return (
    <div className="rounded-full w-16 h-16 absolute bottom-0 left-1/2 transform translate-x-[-50%] translate-y-[50%] bg-gradient-to-b from-orange-200 to-gray-900 p-1">
      <div className="h-full w-full flex justify-center items-center bg-header rounded-full">
        <h4 className="relative z-20 font-semibold text-xl">BB</h4>
      </div>
    </div>
  );
}

export default Logo;
