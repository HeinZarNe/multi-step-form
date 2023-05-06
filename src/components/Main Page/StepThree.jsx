import React, { useState, useEffect } from "react";
import check from "../../assets/images/icon-checkmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { addonUpdate } from "../../store/planSlice";
const StepThree = () => {
  const sub = useSelector((state) => state.plans.plan.option);
  const list = [
    {
      name: "Online Service",
      desc: "Acess to multiplayer games",
      price: sub === "mo" ? 1 : 10,
      checked: false,
    },
    {
      name: "Large Storage",
      desc: "Extra 1 TB of cloud save",
      price: sub === "mo" ? 2 : 20,
      checked: false,
    },
    {
      name: "Customizable profile",
      desc: "Custom theme on your profile",
      price: sub === "mo" ? 2 : 20,
      checked: false,
    },
  ];
  const [checkList, setCheckList] = useState(list);
  useEffect(() => {
    dispatch(addonUpdate(checkList.filter((item) => item.checked == true)));
  }, [checkList]);

  const addon = useSelector((state) => state.plans.addon);

  const dispatch = useDispatch();

  const handleClick = (name, price, index) => {
    const updatedList = checkList.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          checked: !item.checked,
        };
      }
      return item;
    });
    setCheckList(updatedList);

    dispatch(addonUpdate(checkList.filter((item) => item.checked == true)));
  };
  return (
    <>
      <span className="text-2xl font-bold ">Pick add-ons</span>
      <span className="text-md text-gray">
        Add-ons help enhance your gaming experience.
      </span>

      {checkList.map((item, index) => {
        const { name, price, desc, checked } = item;

        return (
          <div
            key={index}
            className={`w-full cursor-pointer text-primary `}
            onClick={(_) => handleClick(name, price, index)}
          >
            <div
              className={`flex w-full flex-row items-center justify-around gap-3 rounded-lg  border-2   px-3 py-4 ${
                checked ? "  border-primary bg-[#EEF5FF]" : " border-gray"
              } `}
            >
              <div className="flex min-w-[25px] items-center justify-center">
                <div
                  className={`flex items-center justify-center rounded-lg border-2 border-stone-300 p-1 ${
                    checked ? "bg-blue" : ""
                  }`}
                >
                  <img className=" h-3 w-3" src={check} alt="checkmark" />
                </div>
              </div>
              <div className=" flex flex-col items-start justify-center">
                <span className="text-lg font-bold">{name}</span>
                <span className="w-fit text-sm text-gray">{desc}</span>
              </div>
              <div>
                <span className="text-sm">{`+${price}/${sub}`}</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default StepThree;
