import React, { useState } from "react";

//icons
import { BsArrowLeft } from "react-icons/bs";
import location from "../../assets/icons/location.svg";
import map from "../../assets/icons/map1.svg";

import { Link, useNavigate } from "react-router-dom";

//components
import { TextInput } from "../textInput";
import ProgressBar from "../progressBar";
import Modal from "../modal";
import ModalContent from "../modalContent";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

const LocationInfo = () => {
  const [showModal, setIsShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Modal width={900} isShow={showModal}>
        <ModalContent onClose={() => setIsShowModal((prev) => !prev)} />
      </Modal>
      <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex">
        <div className="flex w-full h-full">
          <ProgressBar active={3} />
          <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg py-8 px-20">
            <div className="flex items-center flex-col h-[90%] text-center border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
              <div>
                <p className="text-[#388AEA]">مرحله 3 از 3</p>
                <p className="pt-2 mb-8 text-[#1e1e1e]">
                  لطفا اطلاعات خود را با دقت وارد نمائید
                </p>
              </div>
              <div className=" flex flex-col gap-[40px]">
                <div className="relative w-[660px] gap-[16px] flex">
                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <div className="px-[15px] pr-[15px] border-l border-solid border-[#D6D6D6]">
                      <img src={location} alt="location" />
                    </div>
                    <div className="relative w-full flex px-[10px]">
                      <label className="absolute -top-[32px] -right-[16px] px-[10px] bg-white">
                        استان
                      </label>
                      <select className="w-full">
                        <option>مازندارن</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <div className="px-[15px] pr-[15px] border-l border-solid border-[#D6D6D6]">
                      <img src={location} alt="location" />
                    </div>
                    <div className="relative w-full flex px-[10px]">
                      <label className="absolute -top-[32px] -right-[16px] px-[10px] bg-white">
                        شهر
                      </label>
                      <select className="w-full">
                        <option>ساری</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex items-center w-[660px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                  <div className="px-[15px] pr-[15px] border-l border-solid border-[#D6D6D6]">
                    <img src={map} alt="location" />
                  </div>
                  <div className="relative w-full flex px-[10px]">
                    <label className="absolute -top-[32px] -right-[16px] px-[10px] bg-white">
                      آدرس
                    </label>
                    <input type="address" placeholder="ایران مازندران ساری" />
                  </div>
                </div>
                <div className="relative w-[660px] gap-[16px] flex">
                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <div className="px-[15px] pr-[15px] border-l border-solid border-[#D6D6D6]">
                      <img src={location} alt="location" />
                    </div>
                    <div className="relative w-full flex px-[10px]">
                      <label className="absolute -top-[32px] -right-[16px] px-[10px] bg-white">
                        طول جغرافیایی
                      </label>
                      <input type="number" placeholder="36.7589" />
                    </div>
                  </div>

                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <div className="px-[15px] pr-[15px] border-l border-solid border-[#D6D6D6]">
                      <img src={location} alt="location" />
                    </div>
                    <div className="relative w-full flex px-[10px]">
                      <label className="absolute -top-[32px] -right-[16px] px-[10px] bg-white">
                        عرض جغرافیایی
                      </label>
                      <input type="number" placeholder="64.5691" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-[#388AEA]"
                  onClick={() => setIsShowModal((prev) => !prev)}
                >
                  انتخاب طول و عرض جغرافیایی از روی نقشه
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between items-center mt-6 ">
              <Link to="/locationInfo" className="no-underline">
                <button type="submit" className="button">
                  ثبت نام <BsArrowLeft />
                </button>
              </Link>
              <a
                onClick={() => navigate(-1)}
                href="#"
                className="text-[#388AEA] no-underline"
              >
                مرحله قبل
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
