const Item = ({ status, text, isLast }) => {
  return (
    <>
      <div className="flex items-center ">
        <div
          className={
            status === "active"
              ? "w-8 h-8 bg-[#9CC4F2] rounded-full border-[3.5px] border-solid border-white"
              : status === "completed"
              ? "w-8 h-8 bg-white rounded-full"
              : "w-8 h-8 bg-[#9CC4F2] rounded-full"
          }
        />
        <div
          className={
            status === "active"
              ? "text-white text-[18px] mr-6 tracking-[1px]"
              : status === "completed"
              ? "text-white text-[18px] mr-6 tracking-[1px]"
              : "text-[#9CC4F2] text-[18px] mr-6 tracking-[1px]"
          }
        >
          {text}
        </div>
      </div>
      {!isLast && (
        <div className="bg-white h-[30px] w-[2px] mr-[16px] my-[8px]" />
      )}
    </>
  );
};

export { Item };
