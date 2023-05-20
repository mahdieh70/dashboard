import React, { useContext } from "react";
import { TextInput } from "../../textInput";

//icons

import usersquerIcon from "../../../assets/icons/usersquare.svg";
import cardIcon from "../../../assets/icons/card.svg";
import calenderIcon from "../../../assets/icons/calendar.svg";
import { BsArrowLeft } from "react-icons/bs";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";
import { validationNationalCode } from "../../../utils/validationNationalCode";
import { axiosUserInstance } from "../../../services/axiosInstance";
import { RegisterContext } from "../context";

const IdentityInfo = ({ increaseStepHandler }) => {
  //   {
  //     "name":"Clark Kent",
  //     "email":"superman@gmail.com",
  //     "phone":"5555551234",
  //     "password":"123456",
  //     "password_confirmation":"123456"
  // }
  const { getData } = useContext(RegisterContext);
  const registerUser = async () => {
    try {
      axiosUserInstance.post("register", {
        data: {},
      });
    } catch (e) {}
  };
  const formik = useFormik({
    initialValues: {
      fullname: "",
      nationalCode: "",
      date: "",
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
      getData({ fullname: formik.values.fullname });
      increaseStepHandler();
    },
  });
  const handleSubmitForm = () => {
    formik.handleSubmit();
  };

  return (
    <div className=" w-full h-full">
      <div className="flex items-center flex-col h-[76vh] text-center px-[130px] border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
        <div>
          <p className="text-[#388AEA]">مرحله 1 از 3</p>
          <p className="pt-2 mb-8 text-[#1e1e1e]">
            لطفا اطلاعات خود را با دقت وارد نمائید
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <form onSubmit={formik.handleSubmit} className="w-[580px]">
            <div className="mb-8">
              <TextInput
                icon={<img src={usersquerIcon} alt="usersquerIcon" />}
                label={"نام و نام خانوادگی"}
                type="fullname"
                placeholder={"محمد حسین رحمتی"}
                {...formik.getFieldProps("fullname")}
              />
              <div className="text-right">
                {formik.errors.fullname ? (
                  <div className="text-rose-500 text-[14px]">
                    {formik.errors.fullname}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-8">
              <TextInput
                icon={<img src={cardIcon} alt="cardIcon" />}
                label={"کد ملی"}
                type="number"
                placeholder={"208-1235-456"}
                {...formik.getFieldProps("nationalCode")}
              />
              <div className="text-right">
                {formik.errors.nationalCode ? (
                  <div className="text-rose-500 text-[14px]">
                    {formik.errors.nationalCode}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="mb-8">
              <TextInput
                icon={<img src={calenderIcon} alt="calenderIcon" />}
                label={"تاریخ تولد"}
                type="text"
                placeholder={"1370/06/31"}
                {...formik.getFieldProps("date")}
              />
              <div className="text-right">
                {formik.errors.date ? (
                  <div className="text-rose-500 text-[14px]">
                    {formik.errors.date}
                  </div>
                ) : null}
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center h-[11vh]">
        <a className="no-underline">
          <button onClick={handleSubmitForm} type="submit" className="button">
            مرحله بعد <BsArrowLeft />
          </button>
        </a>
      </div>
    </div>
  );
};

export { IdentityInfo };
