import React from "react";
interface InputProps {
  id: string;
  type?: string;
  onChange: any;
  value: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ id, type, onChange, value, label }) => {
  return (
    <div className="relative flex flex-col gap-6">
      <input
        onChange={onChange}
        id={id}
        type={type}
        value={value}
        placeholder=" "
        className="
        block
        rounded
        xl:px-5
        xl:pt-5
        xl:pb-2
        focus:outline-none
        focus:ring-0
        w-full
        text-white
        bg-[#333]
        appearance-none
        peer
        "
      />
      <label
        htmlFor={id}
        className="absolute text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] left-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
