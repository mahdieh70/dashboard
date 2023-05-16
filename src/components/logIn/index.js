import React from "react";
import { Link } from "react-router-dom";

//logo
import logo from "../../assets/logo/Logo (1).svg";

//icon
import messageText from "../../assets/icons/messagetext1.svg";
import lock from "../../assets/icons/lock.svg";
import { BsArrowLeft } from "react-icons/bs";

//image
import image from "../../assets/images/Rectangle 2 (1).png";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";
import { TextInput } from "../textInput";
// import { axiosInstance } from "../../services/axiosInstance";

const LogIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //form validation
    validationSchema: Yup.object({
      email: Yup.string()
        .email("ایمیل نامعتبر است.")
        .required("لطفا ایمیل خود را وارد کنید."),
      password: Yup.string()
        .min(8, "حداقل 8 کاراکتر وارد کنید!")
        .required("فیلد الزامی است!"),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });

  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex flex-row-reverse ">
      <div className="w-2/4 bg-white  rounded-tl-lg rounded-bl-lg">
        <div className="flex justify-center items-center flex-col">
          <div className="flex items-center flex-col">
            <img
              src={logo}
              alt="logo"
              className="w-[120px] h-[120px] mt-[40px] "
            />
            <h1 className="text-[36px]">ورود به داشبورد</h1>
            <Link
              to="register"
              className="text-[20px] leading-[31px] no-underline py-[15px] text-[#388AEA]"
            >
              هنوز ثبت نام نکرده اید؟
            </Link>
          </div>

          <div className="px-[53px] w-full mt-[50px]">
            <form
              onSubmit={formik.handleSubmit}
              className="flex justify-center items-center flex-col"
            >
              <div className="mb-10 w-full">
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

              <div className="mb-10 w-full">
                <TextInput
                  icon={<img src={lock} alt="lockIcon" />}
                  label={"رمز عبور"}
                  type="password"
                  placeholder={"حداقل 8 کاراکتر"}
                  {...formik.getFieldProps("password")}
                />

                {formik.errors.password ? (
                  <div className="text-rose-700 text-[14px]">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              {/* <button onClick={handleRegister}>fake register</button> */}

              <Link to="/dashboard" className="no-underline ">
                <button type="submit" className="button">
                  ورود به حساب <BsArrowLeft size={22} />
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-[#388AEA]  rounded-tr-lg rounded-br-lg px-[117px] ">
        <div className="flex flex-col justify-center items-center  ">
          <h2 className="text-[36px] text-white mt-[70px] ">
            صرافی ارز دیجیتال نیوکوین اسپیس
          </h2>
          <p className="w-[324px] text-white text-[20px] font-medium leading-[31px] mt-[21px]">
            خرید و فروش امن بیت‌کوین و ارزهای دیجیتال به بزرگترین بازار ارز
            دیجیتال ایران بپیوندید
          </p>
          <img src={image} alt="image" className="h-[330px] mt-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
