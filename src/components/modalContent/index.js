import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const ModalContent = ({onClose}) => {
    
  return (
    <div className="w-full h-[400px] bg-rose-500 flex items-end justify-center rounded-[24px]">
      <div className="flex items-center gap-[16px] mb-[17px]">
        <div className="flex gap-x-4 w-[80px] h-10 items-center bg-[#B4B4B4] text-white border-none rounded-[18px] text-[14px] px-6 py-6 tracking-[1px] cursor-pointer ">
          <button
            onClick={() => {
              onClose();
            }}
          >
            بستن
          </button>
        </div>
        <div className="flex gap-x-4 w-[164px] h-10 items-center bg-[#EA8E38] text-white border-none rounded-[18px] text-[14px] px-6 py-6 tracking-[1px] cursor-pointer ">
          <button>ثبت موقعیت</button>
          <BsArrowLeft size={22} />
        </div>
      </div>
    </div>
  );
};

export default ModalContent;
