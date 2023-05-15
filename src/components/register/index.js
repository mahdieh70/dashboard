import React from "react";
import { TextInput } from "../textInput";

import { Link, useNavigate } from "react-router-dom";

//components

import ProgressBar from "../progressBar";

//icons

import usersquerIcon from "../../assets/icons/usersquare.svg";
import cardIcon from "../../assets/icons/card.svg";
import calenderIcon from "../../assets/icons/calendar.svg";
import { BsArrowLeft } from "react-icons/bs";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";
import { validationNationalCode } from "../../utils/validationNationalCode";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      nationalCode: "",
    },
    //form validation
    validationSchema: Yup.object({
      fullname: Yup.string().required(
        "لطفا نام و نام خانوادگی خود را وارد کنید"
      ),
      nationalCode: Yup.string()
        .length(10, "کد ملی باید 10 رقم باشد!")
        .required("لطفا کد ملی خود را وارد کنید")
        .test("test-name", "کد ملی معتبر نیست!", function (value) {
          return validationNationalCode(value);
        }),
      date: Yup.string().required("لطفا تاریخ تولد خود را وارد کنید"),
    }),
    onSubmit: () => {
      navigate("/sendingCode");
    },
  });
  const handleSubmitForm = () => {
    formik.handleSubmit();
  };

  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex ">
      <div className="flex w-full h-full">
        <ProgressBar active={1} />
        <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg py-8 px-20">
          <div className="flex items-center flex-col h-[90%] text-center px-[130px] border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
            <div>
              <p className="text-[#388AEA]">مرحله 1 از 3</p>
              <p className="pt-2 mb-8 text-[#1e1e1e]">
                لطفا اطلاعات خود را با دقت وارد نمائید
              </p>
            </div>
            <div className="w-full pt-5">
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-8">
                  <TextInput
                    icon={<img src={usersquerIcon} alt="usersquerIcon" />}
                    label={"نام و نام خانوادگی"}
                    type="fullname"
                    placeholder={"محمد حسین رحمتی"}
                    {...formik.getFieldProps("fullname")}
                  />
                  {formik.errors.fullname ? (
                    <div className="text-rose-700 text-[14px]">
                      {formik.errors.fullname}
                    </div>
                  ) : null}
                </div>
                <div className="mb-8">
                  <TextInput
                    icon={<img src={cardIcon} alt="cardIcon" />}
                    label={"کد ملی"}
                    type="number"
                    placeholder={"208-1235-456"}
                    {...formik.getFieldProps("nationalCode")}
                  />
                  {formik.errors.nationalCode ? (
                    <div className="text-rose-700 text-[14px]">
                      {formik.errors.nationalCode}
                    </div>
                  ) : null}
                </div>
                <div className="mb-8">
                  <TextInput
                    icon={<img src={calenderIcon} alt="calenderIcon" />}
                    label={"تاریخ تولد"}
                    type="text"
                    placeholder={"1370/06/31"}
                    {...formik.getFieldProps("date")}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-6">
            <Link className="no-underline">
              <button
                onClick={handleSubmitForm}
                type="submit"
                className="button"
              >
                مرحله بعد <BsArrowLeft />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
