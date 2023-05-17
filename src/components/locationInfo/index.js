import React, { useState } from "react";

//icons
import { BsArrowLeft } from "react-icons/bs";
import location from "../../assets/icons/location.svg";
import { TextInput } from "../textInput";
import { Link, useNavigate } from "react-router-dom";
import map from "../../assets/icons/map1.svg";

import { useFormik } from "formik";

//data

import { cities } from "../../data/cities";
import { provinces } from "../../data/provinces";

//components

import ProgressBar from "../progressBar";
import Modal from "../modal";
import ModalContent from "../modalContent";

//yup
import * as Yup from "yup";

const LocationInfo = () => {
  const [showModal, setIsShowModal] = useState(false);
  // const [selectecProvince, setSelectedProvince] = useState("27");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      province: "27",
      city: "1",
      address: "",
      lat: "",
      lan: "",
    },
    //form validation
    validationSchema: Yup.object().shape({
      province: Yup.string().required("لطفا یک استان را انتخاب کنید"),
      city: Yup.string().required("لطفا یک استان را انتخاب کنید"),
      address: Yup.string().required("لطفا یک استان را انتخاب کنید"),
      lat: Yup.string().required("لطفا یک استان را انتخاب کنید"),
      lan: Yup.string().required("لطفا یک استان را انتخاب کنید"),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });

  const selectecProvince = formik.values.province;

  const provinceRelatedCities = cities.filter(({ province }) => {
    return String(province) === selectecProvince;
  });

  return (
    <>
      <Modal width={900} isShow={showModal}>
        <ModalContent onClose={() => setIsShowModal((prev) => !prev)} />
      </Modal>
      <div className="w-full h-screen bg-[#E8F4FF] py-8 px-8 flex">
        <div className="flex w-full h-full">
          <ProgressBar active={3} />
          <div className="bg-white w-[75%] h-full rounded-tl-lg rounded-bl-lg py-8 px-20">
            <div className="flex items-center flex-col h-[90%] text-center border border-solid border-[#D6D6D6] border-t-0 border-r-0 border-l-0">
              <div>
                <p className="text-[#388AEA]">مرحله 3 از 3</p>
                <p className="pt-2 mb-8 text-[#1e1e1e]">
                  لطفا اطلاعات خود را با دقت وارد نمائید
                </p>
              </div>
              <form></form>
              <div className=" flex flex-col gap-[40px]">
                <div className="relative w-[660px] gap-[16px] flex">
                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <div className="px-[15px] pr-[15px] border-l border-solid border-[#D6D6D6]">
                      <img src={location} alt="location" />
                    </div>
                    <div className="relative w-full flex px-[10px]">
                      <label
                        htmlFor="province"
                        className="absolute -top-[32px] -right-[16px] px-[10px] bg-white"
                      >
                        استان
                      </label>
                      <select
                        {...formik.getFieldProps("province")}
                        className="w-full"
                      >
                        {provinces.map((province) => (
                          <option value={province.id} key={province.id}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                      {formik.errors.province ? (
                        <div className="text-rose-700 text-[14px]">
                          {formik.errors.province}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <div className="px-[15px] pr-[15px] border-l border-solid border-[#D6D6D6]">
                      <img src={location} alt="location" />
                    </div>
                    <div className="relative w-full flex px-[10px]">
                      <label
                        htmlFor="province"
                        className="absolute -top-[32px] -right-[16px] px-[10px] bg-white"
                      >
                        شهر
                      </label>
                      <select
                        className="w-full"
                        {...formik.getFieldProps("city")}
                      >
                        {provinceRelatedCities.map((city) => (
                          <option value={city.id} key={city.id}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <TextInput
                  label={"آدرس"}
                  icon={<img src={map} alt="location" />}
                  {...formik.getFieldProps("address")}
                />

                <div className="relative w-[660px] gap-[16px] flex">
                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <TextInput
                      label={"طول جغرافیایی"}
                      icon={<img src={location} alt="location" />}
                      {...formik.getFieldProps("lan")}
                    />
                  </div>

                  <div className="flex items-center w-[322px] h-[60px] relative rounded-[50px] border border-solid border-[#D6D6D6]">
                    <TextInput
                      label={"عرض جغرافیایی"}
                      icon={<img src={location} alt="location" />}
                      {...formik.getFieldProps("lat")}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-[#388AEA]"
                  onClick={() => setIsShowModal((prev) => !prev)}
                >
                  انتخاب طول و عرض جغرافیایی از روی نقشه
                </a>
              </div>
            </div>
            <div className="flex flex-row-reverse justify-between items-center mt-6 ">
              <Link to="/locationInfo" className="no-underline">
                <button type="submit" className="button">
                  ثبت نام <BsArrowLeft />
                </button>
              </Link>
              <a
                onClick={() => navigate(-1)}
                href="#"
                className="text-[#388AEA] no-underline"
              >
                مرحله قبل
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationInfo;
