import React from "react";
import { HiOutlineXCircle } from "react-icons/hi";

const Toast = ({ closeToast }) => {
  return (
    <div
      className="duration-500 transition-all
     ease-in-out bg-[#36d399] 
     justify-between flex
      items-center p-4 rounded-md "
    >
      <h2>Sport event Created Successfully</h2>
      <div>
        <button onClick={closeToast}>
          <HiOutlineXCircle className="text-[22px] ml-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
