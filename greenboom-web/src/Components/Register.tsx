import React from "react";
import appScreenshot from "../assets/appScreenshot.png";
import Title from "./Title/Title";
function Register() {
  return (
    <div className="ml-[9%] mr-[9%] rounded-xl bg-sky flex flex-row mt-10 gap-20">
      <div className="w-[50%] mt-[23%] pl-[21%]">
        <Title color="white" fontSize="2xl" weight="bold" marginBottom="mb-2">
          Register Today
        </Title>
        <Title color="white" fontSize="2xl" weight="bold" marginBottom="mb-7">
          Empowered Together
        </Title>
        <Title color="white" fontSize="md" weight="normal" marginBottom="mb-7">
          Discover how our products can help you.
        </Title>
        <button className="bg-black h-11 text-white px-4">
          Sign up for free
        </button>
      </div>
      <div className="w-[50%] pt-10 pb-10  ">
        <img src={appScreenshot} width={270} />
      </div>
    </div>
  );
}

export default Register;
