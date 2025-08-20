import React from "react";

type InputProps = {
  text: string; 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
};

const Input: React.FC<InputProps> = ({ text, value, onChange, onKeyDown }) => {
  return (
    <div className="flex items-center bg-zinc-800 border border-zinc-700 text-white rounded-[5px] shadow text-sm w-fit">
      <div aria-disabled="true" className="w-8 sm:w-10 grid place-content-center"></div>
      <input
        type="text"
        spellCheck="false"
        placeholder={text}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown} 
        className={`bg-transparent py-1.5 sm:py-2 outline-none placeholder:text-zinc-400 transition-all duration-300 
          ${value ? "w-36 sm:w-48 md:w-56 lg:w-64" : "w-28 sm:w-40 md:w-48 lg:w-64 focus:w-64"} 
          sm:text-sm md:text-base lg:text-lg`}
      />
    </div>
  );
};

export default Input;
