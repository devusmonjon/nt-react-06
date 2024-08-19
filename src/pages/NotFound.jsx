import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="h-[80vh] w-full relative">
        <img src="/404.jpg" className="h-full object-cover w-full" />
        <div
          className="w-full h-full absolute top-0 left-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5))",
          }}
        ></div>
        <div className="z-10 absolute top-[90%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row gap-5">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-lg text-lg text-[#FF9900] font-medium border-2 border-[#FF9900] duration-300 hover:bg-[#FF9900] hover:text-white"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-lg text-lg text-[#FF9900] font-medium border-2 border-[#FF9900] duration-300 hover:bg-[#FF9900] hover:text-white"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(NotFound);
