import React, { useEffect } from "react";
//portal
import { createPortal } from "react-dom";



const Modal = ({ isShow, children }) => {
  const test = document.querySelector("body");

  useEffect(() => {
    if (isShow) {
      test.style.overflow = "hidden";
    } else if (!isShow) {
      test.style.overflow = "unset";
    }
  }, [isShow]);

  return (
    <>
      {isShow
        ? createPortal(
            <div className="fixed z-[999] w-full h-full top-0 left-0 overflow-auto">
              <div
                className="absolute w-full h-full top-0 left-0"
                style={{ backgroundColor: "rgb(0 0 0 / 70%)" }}
              />
              <div className="fixed w-full h-full overflow-auto">
                <div className="w-[60%] my-[100px] mx-auto bg-white relative rounded-[24px] px-[18px] py-[18px]">
                  {children}
                </div>
               
              </div>
            </div>,
            test
          )
        : null}
    </>
  );
};

export default Modal;
