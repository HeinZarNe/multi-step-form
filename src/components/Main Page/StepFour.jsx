import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StepFour = () => {
  const [total, setTotal] = useState(0);
  const addon = useSelector((state) => state.plans.addon);
  const plan = useSelector((state) => state.plans.plan);

  useEffect(() => {
    if (addon.length > 0) {
      let i = 0;
      addon.map((item) => {
        i += item.price;
      });
      const newTotal = parseInt(plan.price) + parseInt(i);
      setTotal(newTotal);
    }
  }, [addon, plan]);
  return (
    <>
      <span className="text-2xl font-bold ">Finishing up</span>
      <span className="text-md text-gray">
        Double-check everything looks OK before confirming.
      </span>
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 rounded-lg bg-[#F8F8FE] p-5">
          {/* plan */}
          <div className="flex flex-row items-center justify-between font-bold ">
            <div className=" flex flex-col text-lg  text-primary">
              <span className="">{`${plan.name} (${
                plan.option === "mo" ? "Monthly" : "Yearly"
              })`}</span>
              <Link to="/2">
                <span className="fonr-md text-base text-gray  underline active:text-primary">
                  Change
                </span>
              </Link>
            </div>
            <span className="text-primary">{`$${plan.price}/${plan.option}`}</span>
          </div>
          <hr className=" text-stone-300" />
          {/* addon */}
          <div className=" flex flex-col gap-4">
            {addon.map((item, i) => (
              <div className="flex justify-between" key={i}>
                <span className=" font-md text-gray">{item.name}</span>
                <span className="font-sm text-primary">{`+$${item.price}/${plan.option}`}</span>
              </div>
            ))}
          </div>
        </div>
        {/* total */}
        <div className="flex justify-between p-5 font-md text-gray">
          <span>Total (per ${plan.option === "mo" ? "month" : "year"})</span>
          <span className="text-lg font-bold text-indigo-600">{`+$${total}/${plan.option}`}</span>
        </div>
      </div>
    </>
  );
};

export default StepFour;
