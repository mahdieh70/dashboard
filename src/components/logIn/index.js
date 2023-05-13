import React from "react";

//logo
import logo from "../../assets/Logo.png";

//icons
import { RiLockPasswordLine } from "react-icons/ri";
import { TbMessage2 } from "react-icons/tb";

//image
import emailIcon from "../../assets/icons/messagetext1.png";
import image from "../../assets/images/Rectangle 2 (1).png";

//formik
import { useFormik } from "formik";

//yup
import * as Yup from "yup";

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
      password: Yup.string().required("لطفا رمز عبور خود را وارد کنید."),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });
  return (
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex flex-row-reverse ">
      <div className="w-2/4 bg-white  rounded-tl-lg rounded-bl-lg">
        <div>
          <div className="flex justify-center items-center flex-col">
            <img
              src={logo}
              alt="logo"
              className="w-[150px] h-[150px] mt-[60px] mb-[30px]"
            />
            <h1 className="text-[40px]">ورود به داشبورد</h1>
            <a
              href="#"
              className="text-[20px] leading-[31px] no-underline py-[15px] text-[#388AEA]"
            >
              هنوز ثبت نام نکرده اید؟
            </a>
            <div className="px-[53px] w-full mt-[50px]">
              <form onSubmit={formik.handleSubmit}>
              <div className="relative mb-10">
                  <label className="absolute -top-3 mx-[41px] px-[10px] z-10 bg-white">
                    رمز عبور
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="placeholder-[#D6D6D6] text-[16px] relative border border-solid border-[#D6D6D6] h-[60px] w-full rounded-full py-[15px] px-[80px]"
                  />
                  <div className="absolute top-[33.33%] right-[20px] w-10 h-5 border border-solid border-[#D6D6D6] border-t-0 border-b-0 border-r-0">
                    <TbMessage2 size={24} />
                  </div>
                </div>

                <div className="relative">
                  <label className="absolute -top-3 mx-[41px] px-[10px] z-10 bg-white">
                    رمز عبور
                  </label>
                  <input
                    type="password"
                    placeholder="حداقل 8 کاراکتر"
                    className="placeholder-[#D6D6D6] text-[16px] relative border border-solid border-[#D6D6D6] h-[60px] w-full rounded-full py-[15px] px-[80px]"
                  />
                  <div className="absolute top-[33.33%] right-[20px] w-10 h-5 border border-solid border-[#D6D6D6] border-t-0 border-b-0 border-r-0">
                    <RiLockPasswordLine size={24} />
                  </div>
                </div>
                <div>
                  <a href="#">ورود به حساب </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/4 bg-[#388AEA]  rounded-tr-lg rounded-br-lg px-[117px] ">
        <div className="flex flex-col justify-center items-center  ">
          <h2 className="text-[36px] text-white pt-[85px] ">
            صرافی ارز دیجیتال نیوکوین اسپیس
          </h2>
          <p className="w-[324px] text-white text-[20px] font-medium leading-[31px] mt-[21px]">
            خرید و فروش امن بیت‌کوین و ارزهای دیجیتال به بزرگترین بازار ارز
            دیجیتال ایران بپیوندید
          </p>
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
