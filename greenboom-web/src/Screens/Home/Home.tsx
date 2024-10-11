import React from "react";
import mascot from "../../assets/mascot.png";
import applestore from "../../assets/applestore.png";
import playstore from "../../assets/playstore.png";
import Title from "../../Components/Title/Title";
import Register from "../../Components/Register";

function Home() {
  return (
    <>
      <div className="relative flex flex-row items-start pt-20 ml-[12%]">
        <img
          src={mascot}
          className="w-64 absolute left-[-10px] top-[130px]"
          alt="Mascot"
        />
        <div className="bg-primaryA rounded-xl ml-40 mr-36">
          <div className="pl-36 pr-16 pt-12">
            <Title fontSize="2xl" weight="bold" color="white" className="pb-7">
              Download the Training Mobile App
            </Title>
            <Title color="white" height="6" weight="semibold" className="pb-10">
              In the app, you can find for example presentations, catalogs,
              flyers, videos, FAQs, and sales tips. You can also order demo and
              sample spill kits to showcase the Green Boom products in action
              for your customers. Not only will you save time by having all of
              the information in one place, but also elevate performance,
              resulting in increased productivity and a more personalized and
              satisfying experience for your valued customers.
            </Title>
          </div>
          <div className="flex flex-row pl-[17%] pb-12 gap-1">
            <img src={playstore} alt="" />
            <img src={applestore} alt="" />
          </div>
        </div>
      </div>
      <Register />
    </>
  );
}

export default Home;
