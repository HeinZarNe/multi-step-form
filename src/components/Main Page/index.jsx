import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Notification } from "@mantine/core";
import { getTotal } from "../../store/planSlice";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const store = useSelector((state) => state.plans);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    if (!store.plan.hasOwnProperty("name")) {
      navigate("/1");
    }
  }, []);

  const handleGoBack = () => {
    if (location.pathname === "/1") return;
    history.back();
  };
  const handleNext = () => {
    if (location.pathname === "/2" && !store.plan.hasOwnProperty("name")) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }
    if (location.pathname === "/3" && !store.addon.length > 0) {
      setWarning(true);
      setTimeout(() => setWarning(false), 2000);
      return;
    }

    if (location.pathname == "/4") {
      navigate("/final");
      return;
    }
    const current = parseInt(location.pathname.split("/")[1]);
    const newPath = current + 1;
    navigate(`/${newPath}`);
  };
  return (
    <>
      <div className="md:flxe-col h-[calc(100vh-170px)] p-3 md:flex md:h-full md:min-h-min md:min-w-[450px] md:flex-col md:p-[45px] md:pb-0">
        <div className="relative flex flex-col gap-3 rounded-lg bg-white p-5 pb-8 text-primary md:h-full md:max-w-[500px] md:justify-start md:gap-5 md:pb-0">
          <Outlet />
          {warning ? (
            <div className="relative left-1  top-[-15px] md:absolute">
              <Notification
                withBorder
                color="red"
                onClose={(_) => setWarning(false)}
              >
                Please fill datas.
              </Notification>
            </div>
          ) : (
            ""
          )}
        </div>

        {location.pathname !== "/final" && location.pathname !== "/1" ? (
          <div className="absolute bottom-0 left-0 flex  w-full items-center justify-between bg-white p-3 md:relative">
            <div
              className="w-fit cursor-pointer select-none  font-bold text-gray hover:text-primary"
              onClick={(_) => handleGoBack()}
            >
              {location.pathname === "/1" || "Go Back"}
            </div>
            <div
              className={
                location.pathname === "/4"
                  ? "w-fit cursor-pointer select-none rounded-md bg-[#483EFF] p-3 font-bold  text-white hover:bg-indigo-500"
                  : "w-fit cursor-pointer select-none rounded-md bg-primary p-3  font-bold text-white hover:bg-[rgb(5,67,143)]"
              }
              onClick={handleNext}
            >
              {location.pathname === "/4" ? "Confirm" : "Next Step"}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Main;
