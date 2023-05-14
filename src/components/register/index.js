import React from "react";
import { TextInput } from "../textInput";

//logo

import logo from "../../assets/Logo.png";

//icons
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineCreditCard } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

const Register = () => {
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
      nationalCode: Yup.string().required("لطفا کد ملی خود را وارد کنید"),
      date: Yup.string().required("لطفا کد ملی خود را وارد کنید"),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });
  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex ">
      <div className="flex w-full h-full">
        <div className="bg-[#388AEA] w-[25%] h-full rounded-tr-lg rounded-br-lg">
          <div className="flex items-center flex-col pt-[60px]">
            <img src={logo} alt="logo" className="w-[120px] h-[120px]"/>
            <h2>ثبت نام</h2>
          </div>
          <div></div>
        </div>
        <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg py-8 px-20">
          <div className="flex items-center flex-col text-center px-[130px] pb-[180px] border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
            <div>
              <p className="text-[#388AEA]">مرحله 1 از 3</p>
              <p className="pt-2 mb-8 text-[#1e1e1e]">
                لطفا اطلاعات خود را با دقت وارد نمائید
              </p>
            </div>
            <div className="w-full pt-5">
              <form>
                <div className="mb-8">
                  <TextInput
                    icon={<HiOutlineUserCircle size={30} />}
                    label={"نام و نام خانوادگی"}
                    type="fullname"
                    placeholder={"محمد حسین رحمتی"}
                    {...formik.getFieldProps("fullname")}
                  />
                </div>
                <div className="mb-8">
                  <TextInput
                    icon={<HiOutlineCreditCard size={30} />}
                    label={"کد ملی"}
                    type="number"
                    placeholder={"208-1235-456"}
                    {...formik.getFieldProps("nationalCode")}
                  />
                </div>
                <div className="mb-8">
                  <TextInput
                    icon={<BiCalendar size={30} />}
                    label={"تاریخ تولد"}
                    type="text"
                    placeholder={"1370/06/31"}
                    {...formik.getFieldProps("date")}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <a href="#" className="no-underline">
              <button type="submit" className="button">
                مرحله بعد <BsArrowLeft />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
