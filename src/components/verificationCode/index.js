import React from "react";
import { Link, useNavigate } from "react-router-dom";

import PinInput from "react-pin-input";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

//icons
import mobileIcon from "../../assets/icons/mobile.svg";
import clipBoardTickIcon from "../../assets/icons/clipboardtick.svg";
import messageText from "../../assets/icons/messagetext1.svg";
import { BsArrowLeft } from "react-icons/bs";

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
    <div className="w-full h-screen bg-[#E8F4FF] px-8 py-8 flex ">
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
            <div className="w-full pt-5">
              <form>
                <div className="mb-8">
                  <TextInput
                    icon={<img src={mobileIcon} alt="mobileIcon" />}
                    label={"شماره همراه"}
                    type="number"
                    placeholder={"09112564798"}
                    {...formik.getFieldProps("phoneNumber")}
                  />
                </div>
                <div className="h-[60px] bg-[#E8F4FF] rounded-[50px] flex items-center">
                  <div className="w-10 h-5 mr-5">
                    <img src={clipBoardTickIcon} alt="clipBoardTickIcon" />
                  </div>
                  <p className="text-[14px]">
                    کد تائید به شماره 09015671346 ارسال شده است. این کد تا 02:00
                    دقیقه دیگر معتبر است
                  </p>
                </div>
                <div className="flex justify-center items-center flex-col">
                  <p className="mt-6 mb-[10px]">کد تائید</p>
                  <PinInput
                    length={4}
                    initialValue=""
                    onChange={(value, index) => {}}
                    type="numeric"
                    inputMode="numeric"
                    style={{ padding: "10px" }}
                    inputStyle={{
                      borderColor: "#D6D6D6",
                      borderRadius: "16px",
                    }}
                    onComplete={(value, index) => {}}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                  />

                  <Link
                    to="/verificationOfPhoneNumber"
                    className="button mb-8 mt-5"
                  >
                    <button>تائید شماره همراه</button>
                  </Link>
                </div>

                <div className="w-full">
                  <TextInput
                    icon={<img src={messageText} alt="messageText" />}
                    label={"ایمیل"}
                    type="email"
                    placeholder={"example@mail.com"}
                    {...formik.getFieldProps("email")}
                  />

                  {formik.errors.email ? (
                    <div className="text-rose-700 text-[14px]">
                      {formik.errors.email}
                    </div>
                  ) : null}
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
