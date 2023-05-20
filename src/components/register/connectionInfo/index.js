import React, { useState } from "react";
import PinInput from "react-pin-input";
import clipBoardTickIcon from "../../../assets/icons/clipboardtick.svg";
import { TextInput } from "../../textInput";
import { Link, useNavigate } from "react-router-dom";

//icons
import mobileIcon from "../../../assets/icons/mobile.svg";
import messageText from "../../../assets/icons/messagetext1.svg";
import { BsArrowLeft } from "react-icons/bs";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

const PINCODE = "1234";

const ConnectionInfo = ({ increaseStepHandler, decreaseStepHandler }) => {
  const [isSendingCode, setisSendingCode] = useState(false);
  const [pincode, setPincode] = useState("");
  const [isPincodeValid, setIspincodeValid] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      email: "",
    },

    //form validation
    validationSchema: Yup.object({
      phoneNumber: Yup.string()
        .length(11, "شماره موبایل معتبر نیست!")
        .required("لطفا شماره همراه خود را وارد کنید")
        .test("ph-validate", "شماره موبایل معتبر نیست!", function (value) {
          return /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/.test(value);
        }),
      email: Yup.string()
        .email("ایمیل نامعتبر است.")
        .required("لطفا ایمیل خود را وارد کنید."),
    }),
    onSubmit: () => {
      console.log("submit");
      increaseStepHandler();
    },
  });

  const isPhoneNumberValid =
    !formik.errors.phoneNumber && formik.getFieldProps("phoneNumber").value
      ? true
      : false;

  const handleOnConfirmPincode = () => {
    if (pincode.length === 4 && pincode === PINCODE) {
      setisSendingCode(false);
      setIspincodeValid(true);
    }
  };

  const handleSub = () => {
    formik.handleSubmit();
  };

  return (
    <div className=" w-full h-full">
        <div className="flex items-center flex-col h-[76vh] text-center px-[130px] border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
          <div>
            <p className="text-[#388AEA]">مرحله 2 از 3</p>
            <p className="pt-2 mb-8 text-[#1e1e1e]">
              لطفا اطلاعات خود را با دقت وارد نمائید
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <form className="w-[580px]">
              <div className="mb-4 relative">
                <TextInput
                  icon={<img src={mobileIcon} alt="mobileIcon" />}
                  label={"شماره همراه"}
                  placeholder={"09112564798"}
                  type={"nubmer"}
                  {...formik.getFieldProps("phoneNumber")}
                />
                {!isPincodeValid ? (
                  <button
                    disabled={!isPhoneNumberValid}
                    onClick={(e) => {
                      e.preventDefault();
                      setisSendingCode(true);
                    }}
                    className="absolute top-[33.33%] left-[20px] text-[#388AEA]"
                  >
                    ارسال کد
                  </button>
                ) : null}

                {formik.errors.phoneNumber ? (
                  <div className="text-rose-700 text-[14px]">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
              </div>
              {isSendingCode ? (
                <>
                  <div className="h-[60px] bg-[#E8F4FF] rounded-[50px] flex items-center">
                    <div className="w-10 h-5 mr-5">
                      <img src={clipBoardTickIcon} alt="clipBoardTickIcon" />
                    </div>
                    <p className="text-[14px]">
                      کد تائید به شماره 09015671346 ارسال شده است. این کد تا
                      02:00 دقیقه دیگر معتبر است
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <p className="mt-6 mb-[10px]">کد تائید</p>
                    <PinInput
                      length={4}
                      type="numeric"
                      inputMode="numeric"
                      style={{ padding: "10px", direction: "ltr" }}
                      inputStyle={{
                        borderColor: "#D6D6D6",
                        borderRadius: "16px",
                      }}
                      onChange={(value) => {
                        setPincode(value);
                      }}
                      // onComplete={(value, index) => {}}
                      autoSelect={true}
                      // regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                    />

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleOnConfirmPincode();
                      }}
                      className="button mb-8 mt-2"
                    >
                      تائید شماره همراه
                    </button>
                  </div>
                </>
              ) : null}

              <div className="mb-8">
                <TextInput
                  icon={<img src={messageText} alt="messageTextIcon" />}
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
        <div className="flex flex-row-reverse justify-between items-center h-[11vh]">
          <button onClick={handleSub} type="submit" className="deActiveButton">
            مرحله بعد <BsArrowLeft />
          </button>

          <a
            onClick={decreaseStepHandler}
            href="#"
            className="text-[#388AEA] no-underline"
          >
            مرحله قبل
          </a>
        </div>
      </div>
   
  );
};

export { ConnectionInfo };
