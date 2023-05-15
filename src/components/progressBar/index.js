// import React from "react";

// import logo from "../../assets/Logo.png";

// const ProgressBar = ({active}) => {
//   return (
//     <div className="bg-[#388AEA] w-[25%] h-full rounded-tr-lg rounded-br-lg">
//       <div className="flex items-center flex-col pt-[60px]">
//         <img src={logo} alt="logo" className="w-[120px] h-[120px]" />
//         <h2 className="text-white text-[30px]">ثبت نام</h2>
//       </div>
//       <div style={{active==="x" color ===red : gray}}>
//         <ul
//           class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
//           data-te-stepper-init
//           data-te-stepper-type="vertical"
//         >
//           <li
//             data-te-stepper-step-ref
//             class="relative h-fit after:absolute after:right-[3.17rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
//           >
//             <div
//               data-te-stepper-head-ref
//               class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']   dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
//             >
//               <span
//                 data-te-stepper-head-icon-ref
//                 class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#9CC4F2] text-sm font-medium text-[#40464f]"
//               ></span>
//               <span
//                 data-te-stepper-head-text-ref
//                 class="pr-5 text-[18px] text-white after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
//               >
//                 اطلاعات فردی
//               </span>
//             </div>
//           </li>

//           <li
//             data-te-stepper-step-ref
//             class="relative h-fit after:absolute after:right-[3.17rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
//           >
//             <div
//               data-te-stepper-head-ref
//               class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']   dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
//             >
//               <span
//                 data-te-stepper-head-icon-ref
//                 class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#9CC4F2] text-sm font-medium text-[#40464f]"
//               ></span>
//               <span
//                 data-te-stepper-head-text-ref
//                 class="pr-5 text-[18px] text-white after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
//               >
//                 اطلاعات ارتباطی
//               </span>
//             </div>
//           </li>

//           <li data-te-stepper-step-ref class="relative h-fit">
//             <div
//               data-te-stepper-head-ref
//               class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-['']  focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
//             >
//               <span
//                 data-te-stepper-head-icon-ref
//                 class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#9CC4F2] text-sm font-medium text-[#40464f]"
//               ></span>
//               <span
//                 data-te-stepper-head-text-ref
//                 class="pr-5 text-[18px] text-white after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
//               >
//                 اطلاعات مکانی
//               </span>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;

import React from "react";

import logo from "../../assets/Logo.png";

const ProgressBar = ({ active }) => {
  return (
    <div className="bg-[#388AEA] w-[25%] h-full rounded-tr-lg rounded-br-lg">
      <div className="flex items-center flex-col pt-[60px] mb-10">
        <img src={logo} alt="logo" className="w-[120px] h-[120px]" />
        <h1 className="text-white text-[30px]">ثبت نام</h1>
      </div>
      <div className="pr-8 pt-[35px]">
        <div className="flex items-center pb-[10px]">
          <div
            className={
              active === "registerActive"
                ? "w-8 h-8 bg-[#9CC4F2] rounded-full border-[3.5px] border-solid border-white"
                : "w-8 h-8 bg-[#9CC4F2] rounded-full"
            }
          ></div>
          <div
            className={
              active === "registerActive"
                ? "text-white text-[18px] mr-6 tracking-[1px]"
                : "text-[#9CC4F2] text-[18px] mr-6 tracking-[1px]"
            }
          >
            اطلاعات فردی
          </div>
        </div>
        <span className="border-[1.5px] border-solid border-white relative right-[15px]"></span>
        <div className="flex items-center pb-[10px] pt-[10px]">
          <div
            className={
              active === "sendingCodeActive" ||
              active === "verificationCodeActive"
                ? "w-8 h-8 bg-[#9CC4F2] rounded-full border-[3.5px] border-solid border-white"
                : "w-8 h-8 bg-[#9CC4F2] rounded-full"
            }
          ></div>
          <div
            className={
              active === "sendingCodeActive" ||
              active === "verificationCodeActive"
                ? "text-white text-[18px] mr-6 tracking-[1px]"
                : "text-[#9CC4F2] text-[18px] mr-6 tracking-[1px]"
            }
          >
            اطلاعات ارتباطی
          </div>
        </div>
        <span className="border-[1.5px] border-solid border-white relative right-[15px]"></span>
        <div className="flex items-center pb-[10px] pt-[10px]">
          <div className="w-8 h-8 bg-[#9CC4F2] rounded-full"></div>
          <div className="text-[#9CC4F2] text-[18px] mr-6 tracking-[1px]">
            اطلاعات مکانی
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
