import React from "react";
import hamburgerMenu from "../../../assets/icons/Vector.png";
import notificationBing from "../../../assets/icons/notificationbing.svg";
import userImage from "../../../assets/images/Rectangle 17.png";

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white flex items-center justify-between rounded-[16px] px-4 py-4">
      <img src={hamburgerMenu} alt="menu" />
      <div className="flex items-center gap-[19px]">
        <div className="relative">
          <span className="w-[12px] h-[12px] rounded-full inline-block bg-[#29C57A] absolute -top-[4px] -right-[3px]"></span>
          <img src={notificationBing} alt="bing" width={24} height={24} />
        </div>

        <img src={userImage} alt="userImage" />
      </div>
    </div>
  );
};

export default Navbar;
