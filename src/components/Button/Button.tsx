import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="relative cursor-pointer py-2 px-4 sm:py-2 sm:px-5 md:py-3 md:px-6 lg:py-3 lg:px-7 text-center font-barlow inline-flex justify-center text-sm sm:text-base md:text-base lg:text-lg uppercase text-white rounded-lg border-solid transition-transform duration-300 ease-in-out group outline-offset-4 focus:outline focus:outline-2 focus:outline-black focus:outline-offset-4 overflow-hidden"
    >
      <span className="relative z-20">{children}</span>
      <span className="absolute left-[-75%] top-0 h-full w-[50%] bg-white/20 rotate-12 z-10 blur-lg group-hover:left-[125%] transition-all duration-1000 ease-in-out" />
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white absolute h-[20%] rounded-tl-lg border-l-2 border-t-2 top-0 left-0" />
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white absolute group-hover:h-[90%] h-[60%] rounded-tr-lg border-r-2 border-t-2 top-0 right-0" />
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white absolute h-[60%] group-hover:h-[90%] rounded-bl-lg border-l-2 border-b-2 left-0 bottom-0" />
      <span className="w-1/2 drop-shadow-3xl transition-all duration-300 block border-white absolute h-[20%] rounded-br-lg border-r-2 border-b-2 right-0 bottom-0" />
    </button>
  );
};

export default Button;
