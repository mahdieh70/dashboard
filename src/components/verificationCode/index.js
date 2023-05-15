import React from "react";
import { Link, useNavigate } from "react-router-dom";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

//icon
import { BsArrowLeft } from "react-icons/bs";
import { TbDeviceMobile } from "react-icons/tb";

//components
import ProgressBar from "../progressBar";
import { TextInput } from "../textInput";

const VerificationCode = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    //form validation
    validationSchema: Yup.object({
      email: Yup.string()
        .email("ایمیل نامعتبر است.")
        .required("لطفا ایمیل خود را وارد کنید."),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });

  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex ">
      <div className="flex w-full h-full">
        <ProgressBar active="verificationCodeActive" />
        <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg py-8 px-20">
          <div className="flex items-center flex-col h-[90%] text-center px-[130px] border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
            <div>
              <p className="text-[#388AEA]">مرحله 2 از 3</p>
              <p className="pt-2 mb-8 text-[#1e1e1e]">
                لطفا اطلاعات خود را با دقت وارد نمائید
              </p>
            </div>
            <div className="w-full pt-5">
              <form>
                <div className="mb-8">
                  <TextInput
                    icon={<TbDeviceMobile size={30} />}
                    label={"شماره همراه"}
                    type="number"
                    placeholder={"09112564798"}
                    {...formik.getFieldProps("phoneNumber")}
                  />
                </div>
                <div>
                  
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

export default VerificationCode;
