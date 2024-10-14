import React from "react";
import Title from "../Title/Title";
import vender1 from "../../assets/vender1.jpg";
import vender2 from "../../assets/vender2.png";
import vender3 from "../../assets/vender3.png";
// import vender5 from "../../assets/vender5.png";
import vender5up from "../../assets/vender5up.png";
import vender6 from "../../assets/vender6.png";

function WhereToBuy() {
  return (
    <div>
      <Title
        color="primaryA"
        weight="bold"
        className="text-center"
        marginTop="mt-10"
        fontSize="3xl"
        letterSpace="widest"
        marginBottom="mb-4"
      >
        WHERE TO BUY:
      </Title>
      <div className="text-center py-2 bg-white">
        {" "}
        <div className="grid grid-cols-3 grid-rows-3 gap-y-0 gap-x-0 w-full max-w-5xl mx-auto">
          <div className="flex justify-center items-center">
            <img src={vender2} alt="Grainger" className="h-20" />{" "}
          </div>
          <div></div>
          <div className="flex justify-center items-center">
            <img src={vender1} alt="Home Depot" className="h-20" />{" "}
          </div>

          <div></div>
          <div className="flex justify-center items-center">
            <img src={vender3} alt="Lawson" className="h-28" />{" "}
          </div>
          <div></div>
          <div className="flex justify-center items-center">
            <img src={vender5up} alt="Zoro" className="h-20" />{" "}
          </div>
          <div></div>
          <div className="flex justify-center items-center">
            <img src={vender6} alt="Ash Group" className="h-20" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhereToBuy;
