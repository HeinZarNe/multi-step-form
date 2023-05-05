import React, { useEffect, useState } from "react";
import arcade from "../../assets/images/icon-arcade.svg";
import advanced from "../../assets/images/icon-advanced.svg";
import pro from "../../assets/images/icon-pro.svg";
import Switch from "react-switch";
import { useDispatch, useSelector } from "react-redux";
import { planUpdate } from "../../store/planSlice";
const StepTwo = () => {
  const dispatch = useDispatch();
  const choose = useSelector((state) => state.plans.plan);
  const [sub, setSub] = useState("mo");
  // for switch
  const [checked, setIsChecked] = useState(true);

  const [selected, setSelected] = useState();

  const plans = [
    {
      icon: arcade,
      name: "Arcade",
      extra: "2 months free",
      price: { mo: 9, yr: 90 },
    },
    {
      icon: advanced,
      name: "Advanced",
      extra: "2 months free",
      price: { mo: 12, yr: 120 },
    },
    {
      icon: pro,
      name: "Pro",
      extra: "2 months free",
      price: { mo: 15, yr: 150 },
    },
  ];
  const handleChange = () => {
    setIsChecked(!checked);
    sub === "mo" && setSub("yr");
    sub === "yr" && setSub("mo");
  };

  const handleSelect = (name, price, i) => {
    dispatch(planUpdate({ name: name, price: price[sub], option: sub }));

    setSelected(i);
  };

  return (
    <>
      <div className="flex flex-col gap-1">
        <span className="w-full text-start text-2xl font-bold md:text-3xl">
          Select yout plan
        </span>
        <span className="text-md text-gray md:text-lg">
          You have the option of monthly or yearly billing.
        </span>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        {plans.map((plan, i) => {
          const { icon, name, extra, price } = plan;

          return (
            <div
              className={`justify-betweeen flex items-start gap-1 rounded-lg border-2  p-3  md:h-[180px] md:flex-1  md:flex-col md:justify-between  md:gap-5 ${
                selected == i ? "  border-primary bg-base" : " border-stone-300"
              }`}
              onClick={(_) => handleSelect(name, price, i)}
              key={i}
            >
              <div className="pt-[6px]">
                <img src={icon} alt="name" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary">{name}</span>
                <span className="text-sm font-bold text-gray">{`$${
                  price[`${sub}`]
                }/${sub}`}</span>
                <span className="font-regular text-sm text-primary">
                  {sub === "yr" && extra}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex w-full flex-row items-center justify-evenly  bg-[#F8F8FE] py-3 font-bold text-primary">
        <span>Monthly</span>
        <Switch
          onChange={() => handleChange()}
          checkedIcon={false}
          onColor="#9333ea"
          offColor="#9333ea"
          uncheckedIcon={false}
          checked={checked}
        />
        <span>Yearly</span>
      </div>
    </>
  );
};

export default StepTwo;
