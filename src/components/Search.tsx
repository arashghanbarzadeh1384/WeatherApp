import React from "react";

type InputProps = {
  text: string; 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ text, value, onChange }) => {
  return (
    <div className="flex items-center bg-zinc-800 border border-zinc-700 text-white rounded-[5px] shadow text-sm w-fit">
      <div
        aria-disabled="true"
        className="w-10 grid place-content-center"
      ></div>
      <input
        type="text"
        spellCheck="false"
        placeholder={text}
        value={value}
        onChange={onChange}
        className={`bg-transparent py-1.5 outline-none placeholder:text-zinc-400 transition-all duration-300 ${
          value ? "w-64" : "w-40 focus:w-64"
        }`}
      />
    </div>
  );
};

export default Input;
