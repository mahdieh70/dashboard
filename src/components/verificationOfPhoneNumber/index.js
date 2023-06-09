import React from "react";
import { TextInput } from "../textInput";
import { useNavigate } from "react-router-dom";

//components
import ProgressBar from "../progressBar";

//icons
import mobileIcon from "../../assets/icons/mobile.svg";
import messageText from "../../assets/icons/messagetext1.svg";

//icons

import { BsArrowLeft } from "react-icons/bs";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

const VerificationOfPhoneNumber = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      email: "",
    },
    
    //form validation
    validationSchema: Yup.object({
      number: Yup.string().required("لطفا شماره همراه خود را وارد کنید"),
      email: (value) => {},
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });
  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex ">
      <div className="flex w-full h-full">
        <ProgressBar active={2} />
        <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg py-8 px-20">
          <div className="flex items-center flex-col h-[90%] text-center px-[130px] border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
            <div>
              <p className="text-[#388AEA]">مرحله 2 از 3</p>
              <p className="pt-2 mb-8 text-[#1e1e1e]">
                لطفا اطلاعات خود را با دقت وارد نمائید
              </p>
            </div>
            <div className="w-full pt-5 relative">
              <form>
                <div className="mb-8 relative">
                  <TextInput
                    icon={<img src={mobileIcon} alt="mobileIcon" />}
                    label={"شماره همراه"}
                    type="number"
                    placeholder={"09015671346"}
                    {...formik.getFieldProps("phoneNumber")}
                  />
                </div>
                <div className="mb-8">
                  <TextInput
                    icon={<img src={messageText} alt="messageText" />}
                    label={"ایمیل"}
                    type="email"
                    placeholder={"example@mail.com"}
                    {...formik.getFieldProps("email")}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row-reverse justify-between items-center mt-6 ">
            <a href="#" className="no-underline">
              <button type="submit" className="button">
                مرحله بعد <BsArrowLeft />
              </button>
            </a>
            <a
              onClick={() => navigate("/register")}
              href="#"
              className="text-[#388AEA] no-underline"
            >
              مرحله قبل
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationOfPhoneNumber;
