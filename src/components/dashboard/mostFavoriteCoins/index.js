import React, { useEffect, useState } from "react";

//formik
import { useFormik } from "formik";

//function
import { getCoin } from "../../../services/api";

const MostFavoriteCoins = () => {
  const [mostFavoriteCoins, setMostFavoriteCoins] = useState([]);

  const sortedByCirculatatinSupply = mostFavoriteCoins.sort((a, b) => {
    return a.circulating_supply - b.circulating_supply;
  });

  useEffect(() => {
    const fetchApi = async () => {
      const data = await getCoin();
      setMostFavoriteCoins(data);
    };
    fetchApi();
  }, []);

  const formik = useFormik({
    initialValues: {
      week: "",
    },

    onSubmit: () => {
      console.log("submit");
    },
  });
  return (
    <div className="w-full bg-white rounded-[16px] px-[13px] py-[14px] flex gap-[38px] ">
      <div className="w-full ">
        <div className="flex justify-between items-center">
          <p>محبوب ترین کوین ها</p>
          <form>
            <select
              {...formik.getFieldProps("week")}
              className="border border-solid border-[#B4B4B4] text-[#B4B4B4] rounded-[8px] text-[14px]"
            >
              <option>هفته</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between items-center">
          <p>نام</p>
          <p>24 ساعت گذشته</p>
        </div>
        <div>
          <div>
            {sortedByCirculatatinSupply.map((favorite) => (
              <>
                <div className="flex justify-between items-center border-b border-solid border-[#D6D6D6] py-[6px] pl-[10px]">
                  <div className="flex items-center">
                    <img
                      src={favorite.image}
                      alt={favorite.name}
                      className="w-[32px] h-[32px]"
                    />
                    <p className="text-[14px]">{favorite.name}</p>
                    <span className="text-[#B3B3B3] text-[12px] capitalize">
                      {favorite.symbol}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#2AC479]">{favorite.circulating_supply.toFixed(2)}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostFavoriteCoins;
