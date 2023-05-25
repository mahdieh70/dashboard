const TextInput = ({
  value,
  onChange,
  onBlur,
  icon,
  passIcon,
  label,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <div className="relative">
      <label className="absolute -top-4 mx-[41px] px-[10px] z-10 bg-white">
        {label}
      </label>
      <input
        {...rest}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
        className="placeholder-[#D6D6D6] bg-white text-[16px] relative border border-solid border-[#D6D6D6] h-[60px] w-full rounded-full py-[15px] px-[80px]"
      />
      <div className="flex items-center absolute top-[33.33%] right-[20px] w-10 h-5 border border-solid border-[#D6D6D6] border-t-0 border-b-0 border-r-0">
        {icon}
      </div>
      <div className="absolute top-[33.33%] left-[20px] cursor-pointer">
        {passIcon}
      </div>
    </div>
  );
};

export { TextInput };
