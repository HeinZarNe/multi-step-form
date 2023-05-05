import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Container = () => {
  useEffect(() => {
    if (location.pathname === "/") location.pathname = "/1";
  }, []);

  return (
    <>
      <div className=" relative box-border min-h-[100vh] items-center justify-center overflow-scroll bg-base md:flex md:items-center   md:justify-center md:p-5 ">
        <div className="rounded-lg bg-transparent md:flex md:h-[600px] md:w-fit  md:items-center md:justify-center md:bg-white md:p-5">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Container;
