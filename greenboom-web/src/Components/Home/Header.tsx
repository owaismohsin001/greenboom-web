import React from "react";
import banner from "../../assets/Home/banner.png";
import oily from "../../assets/Home/oily.png";
import arrow from "../../assets/Home/arrow.svg";
import Title from "../../Components/Title/Title";

function Header() {
  return (
    <>
      <div className="relative">
        <img src={banner} className="h-[440px] w-full object-cover" alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Title
            weight="medium"
            letterSpace="widest"
            fontSize="6xl"
            className="text-primary text-3xl font-bold"
          >
            FROM OIL TO SOIL
          </Title>
        </div>
      </div>
      <div className="mt-16 flex flex-row">
        <div className="pl-56">
          <img src={oily} alt="" />
        </div>
        <div className="w-[50%] ml-5">
          <Title fontSize="4xl" weight="medium">
            COMPOSTABLE, NON-PLASTIC & ZERO-WASTE SOLUTION TO OIL CLEANUPS
          </Title>
          <Title marginTop="mt-5" weight="light">
            Let that sink in...
          </Title>
        </div>
      </div>
      {/* Revolutionizing  */}
      <div className="flex flex-row ml-52 mr-20 mt-36">
        <div className="w-[40%] ">
          <Title weight="medium" fontSize="5xl">
            Revolutionizing the way oil clean-ups are managed.
          </Title>
          <Title weight="light" height="6" fontSize="lg" marginTop="mt-5">
            Green Boom offers a holistic Oil to Soil solution that no other
            company can! Our patented Sorbents, combined with an Oil-Eating
            Microbe, and Composting process not only solve oil clean-ups but
            actively contribute to our planet's health.{" "}
          </Title>
          <div className="flex flex-row">
            <Title className="text-primaryA" weight="medium" marginTop="mt-24">
              We know that’s a mouth-full - check out the video.
            </Title>
            <img src={arrow} alt="" width={100} className="mt-10 pl-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
