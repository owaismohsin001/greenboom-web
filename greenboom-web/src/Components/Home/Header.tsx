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
      {/* Revolutionizing Section */}
      <div className="flex flex-row justify-between items-center ml-52 mr-20 mt-36">
        <div className="w-[45%]">
          <Title weight="medium" fontSize="5xl">
            Revolutionizing the way oil clean-ups are managed.
          </Title>
          <Title weight="light" height="6" fontSize="lg" marginTop="mt-5">
            Green Boom offers a holistic Oil to Soil solution that no other
            company can! Our patented Sorbents, combined with an Oil-Eating
            Microbe, and Composting process not only solve oil clean-ups but
            actively contribute to our planet's health.
          </Title>
          <div className="flex flex-row items-center mt-10">
            <Title className="text-primaryA" weight="medium">
              We know that’s a mouth-full - check out the video.
            </Title>
            <img src={arrow} alt="" width={100} className="ml-2 mb-7" />
          </div>
        </div>
        <div className="w-[50%] -mt-20 ">
          <iframe
            width="90%"
            height="270"
            src="https://www.youtube.com/embed/IncVIEyB28g?si=LFhLfrXF5U6tDEuc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Header;
