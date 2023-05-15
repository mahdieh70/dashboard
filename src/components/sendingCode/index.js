import React from "react";
import { TextInput } from "../textInput";
import { Link, useNavigate } from "react-router-dom";

//components
import ProgressBar from "../progressBar";

//icons
import { TbDeviceMobile } from "react-icons/tb";
import { TbMessage2 } from "react-icons/tb";
import { BsArrowLeft } from "react-icons/bs";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

const SendingCode = () => {
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
        <ProgressBar active="sendingCodeActive"/>
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
                    icon={<TbDeviceMobile size={30} />}
                    label={"شماره همراه"}
                    type="number"
                    placeholder={"09112564798"}
                    {...formik.getFieldProps("phoneNumber")}
                  />
                  <button
                    onClick={() => navigate("/verificationCode")}
                    className="absolute top-[33.33%] left-[20px] text-[#388AEA]"
                  >
                    ارسال کد
                  </button>
                </div>
                <div className="mb-8">
                  <TextInput
                    icon={<TbMessage2 size={30} />}
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
              <button type="submit" className="deActiveButton">
                مرحله بعد <BsArrowLeft />
              </button>
            </a>
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
  );
};

export default SendingCode;
