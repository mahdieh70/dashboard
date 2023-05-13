import React from "react";

//logo
import logo from "../../assets/Logo.png";

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
    <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex flex-row-reverse " >
      <div className="w-2/4 bg-white  rounded-tl-lg rounded-bl-lg">
        <div>
          <div className="flex justify-center items-center flex-col pt-[85px]">
            <img src={logo} alt="logo" className="w-[101px] h-[94px]" />
            <p>ورود به داشبورد</p>
            <a href="#" className="text-[20px] leading-[31px] no-underline">
              هنوز ثبت نام نکرده اید؟
            </a>
            <div className="px-[53px] w-full">
              <form onSubmit={formik.handleSubmit}>
                <div className="relative">
                  <label className="absolute -top-3 mx-[41px] px-[10px] z-10 bg-white">
                    ایمیل
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="relative border border-solid border-[#D6D6D6] h-[60px] w-full rounded-full pr-[86px]"
                  />
                  <div className="absolute top-[33.33%]">
                    <img src={emailIcon} alt="emailIcon" />
                  </div>
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
          <img src={image} alt="image"/>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
