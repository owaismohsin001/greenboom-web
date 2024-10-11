import React from "react";
import Title from "./Title/Title";
import vender1 from "../assets/vender1.jpg";
import vender2 from "../assets/vender2.png";
import vender3 from "../assets/vender3.png";
import vender4 from "../assets/vender4.png";
function Venders() {
  return (
    <div className="flex flex-row ml-[9%] mr-[9%] mt-16 gap-6">
      <div className="w-[60%] bg-bg rounded-xl pt-12">
        <Title fontSize="2xl" weight="semibold" className="text-center pb-6">
          Popular Vendors
        </Title>
        <div className="flex flex-row pl-6 pr-6  pb-8">
          <img src={vender1} width={190} alt="" />
          <img src={vender2} width={250} className="h-14 mt-16 " alt="" />
          <img src={vender3} width={230} className="h-48 -mt-1" alt="" />
        </div>
      </div>
      <div className="w-[40%] bg-bg rounded-xl pt-12">
        <Title fontSize="2xl" weight="semibold" className="text-center pb-6">
          Coming Soon
        </Title>
        <img src={vender4} width={140} className="p-2" alt="" />
      </div>
    </div>
  );
}

export default Venders;
