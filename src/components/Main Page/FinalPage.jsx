import React from "react";
import Thank from "../../assets/images/icon-thank-you.svg";
const FinalPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-10">
        <img src={Thank} alt="thank you" className="w-[60px]" />
        <span className="text-2xl font-bold ">Thank you!</span>
        <span className="text-md text-center text-gray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </span>
      </div>
    </>
  );
};

export default FinalPage;
