import React from "react";

import logo from "../../assets/Logo.png";

const ProgressBar = () => {
  return (
    <div className="bg-[#388AEA] w-[25%] h-full rounded-tr-lg rounded-br-lg">
      <div className="flex items-center flex-col pt-[60px]">
        <img src={logo} alt="logo" className="w-[120px] h-[120px]" />
        <h2 className="text-white text-[30px]">ثبت نام</h2>
      </div>
      <div>
        <ul
          class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
          data-te-stepper-init
          data-te-stepper-type="vertical"
        >
          <li
            data-te-stepper-step-ref
            class="relative h-fit after:absolute after:right-[3.17rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
          >
            <div
              data-te-stepper-head-ref
              class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']   dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
            >
              <span
                data-te-stepper-head-icon-ref
                class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#9CC4F2] text-sm font-medium text-[#40464f]"
              ></span>
              <span
                data-te-stepper-head-text-ref
                class="pr-5 text-white after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
              >
                اطلاعات فردی
              </span>
            </div>
          </li>

          <li
            data-te-stepper-step-ref
            class="relative h-fit after:absolute after:right-[3.17rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
          >
            <div
              data-te-stepper-head-ref
              class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']   dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
            >
              <span
                data-te-stepper-head-icon-ref
                class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#9CC4F2] text-sm font-medium text-[#40464f]"
              ></span>
              <span
                data-te-stepper-head-text-ref
                class="pr-5 text-white after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
              >
                اطلاعات ارتباطی
              </span>
            </div>
          </li>

          <li data-te-stepper-step-ref class="relative h-fit">
            <div
              data-te-stepper-head-ref
              class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
            >
              <span
                data-te-stepper-head-icon-ref
                class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#9CC4F2] text-sm font-medium text-[#40464f]"
              ></span>
              <span
                data-te-stepper-head-text-ref
                class="pr-5 text-white after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
              >
                اطلاعات مکانی
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProgressBar;

// import React from "react";

// import logo from "../../assets/Logo.png";

// const ProgressBar = () => {
//   return (
//     <div className="bg-[#388AEA] w-[25%] h-full rounded-tr-lg rounded-br-lg">
//       <div className="flex items-center flex-col pt-[60px]">
//         <img src={logo} alt="logo" className="w-[120px] h-[120px]" />
//         <h2>ثبت نام</h2>
//       </div>
//       <div>
//         <ul></ul>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;
