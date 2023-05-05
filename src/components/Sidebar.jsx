import React from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const numbers = [
    { step: 1, title: "your info" },
    { step: 2, title: "Select plan" },
    { step: 3, title: "ADD-ONS" },
    { step: 4, title: "SUMMARY" },
  ];
  const location = useLocation();

  const isActive = (pathname) => {
    if (location.pathname === pathname) {
      return "rounded-full bg-accent text-black";
    } else if (pathname === "/4" && location.pathname === "/final") {
      return "rounded-full bg-accent text-black";
    }
  };
  return (
    <div className="mb-[-77px] flex h-[170px] items-start justify-center bg-mobile bg-cover bg-no-repeat p-5 pt-10 text-white  md:mb-0 md:h-full   md:w-[275px] md:justify-start md:rounded-lg md:bg-desktop">
      <div className="flex flex-row  items-center justify-center gap-3 md:w-full md:flex-col md:justify-between md:gap-7 ">
        {numbers.map((number, i) => (
          <div
            key={i}
            className="md:flex md:w-full md:flex-row md:justify-start md:gap-3 md:ps-5"
          >
            <div
              className={`${isActive(
                `/${number.step}`
              )} flex h-10 w-10 items-center justify-center rounded-full border-2 border-white  font-bold `}
            >
              {number.step}
            </div>
            <div className="hidden md:flex md:flex-col ">
              <span className="text-base text-stone-400">
                STEP {number.step}
              </span>
              <span className=" font-bold uppercase text-white">
                {number.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
