import React, { useState } from "react";
import { Link } from "react-router-dom";

//logo
import logo from "../../assets/logo/Logo (1).svg";

//icon
import messageText from "../../assets/icons/messagetext1.svg";
import lock from "../../assets/icons/lock.svg";
import { BsArrowLeft } from "react-icons/bs";
import passwordIcon from "../../assets/icons/eye.svg";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

//image
import image from "../../assets/images/Rectangle 2 (1).png";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";
import { TextInput } from "../textInput";

const LogIn = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
        .required("لطفا رمز عبور خود را وارد کنید!"),
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
            <h1 className="text-[40px] font-bold">ورود به داشبورد</h1>
            <Link
              to="register"
              className="text-[20px] leading-[31px] no-underline py-[15px] text-[#388AEA]"
            >
              هنوز ثبت نام نکرده اید؟
            </Link>
          </div>

          <div className=" px-[53px] w-full mt-[50px]">
            <form
              onSubmit={formik.handleSubmit}
              className="flex justify-center items-center flex-col"
            >
              <div className="flex flex-col gap-[10px] mb-10 w-full">
                <TextInput
                  icon={<img src={messageText} alt="messageTextIcon" />}
                  label={"ایمیل"}
                  type="email"
                  placeholder={"example@mail.com"}
                  {...formik.getFieldProps("email")}
                />

                {formik.errors.email ? (
                  <div className="text-rose-700 text-[14px] mr-5">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-[10px] mb-10 w-full">
                <div className="relative">
                  <label className="absolute -top-4 mx-[41px] px-[10px] z-10 bg-white">
                    رمز عبور
                  </label>
                  <input
                    className="placeholder-[#D6D6D6] bg-white text-[16px] relative border border-solid border-[#D6D6D6] h-[60px] w-full rounded-full py-[15px] px-[80px]"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    placeholder="حداقل 8 کاراکتر"
                    onChange={(e) => setPassword(e.target.value)}
                    {...formik.getFieldProps("password")}
                  />
                  <div className="flex items-center absolute top-[33.33%] right-[20px] w-10 h-5 border border-solid border-[#D6D6D6] border-t-0 border-b-0 border-r-0">
                    <img src={lock} alt="lockIcon" />
                  </div>
                  <button onClick={handleTogglePassword}>
                    {showPassword ? (
                      <div className="absolute top-[33.33%] left-[20px] cursor-pointer">
                        <AiOutlineEyeInvisible size={20} className="opacity-40"/>
                      </div>
                    ) : (
                      <div className="absolute top-[33.33%] left-[20px] cursor-pointer">
                        <AiOutlineEye size={20} className="opacity-40" />
                      </div>
                    )}
                  </button>
                </div>
            
                {formik.errors.password ? (
                  <div className="text-rose-700 text-[14px] mr-5">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>

              <Link to="/dashboard" className="no-underline ">
                <button type="submit" className="button">
                  ورود به حساب <BsArrowLeft size={22} />
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-[#388AEA]  rounded-tr-lg rounded-br-lg px-[117px] text-center ">
        <div className="flex flex-col justify-center items-center  ">
          <h2 className="text-[34px] font-bold text-white mt-[70px] ">
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
