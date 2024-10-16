import Title from "./Title/Title";
import header from "../assets/Science/header.png";
import cloud from "../assets/Science/cloud.svg";
import cloud2 from "../assets/Science/cloud2.svg";
import waste1 from "../assets/Science/waste1.png";
import waste2 from "../assets/Science/waste2.png";
import tri from "../assets/Science/tri.png";
import dot1 from "../assets/Science/Dot1.svg";
import dot2 from "../assets/Science/Dot2.svg";
import dot3 from "../assets/Science/Dot3.svg";
import arrow from "../assets/Science/arrow.svg";

function ScienceHeader() {
  return (
    <>
      <div className="flex flex-row  ">
        <div className="ml-[0%] w-[50%]">
          <div className="ml-32">
            <Title
              className="text-primaryA"
              marginTop="mt-48"
              weight="semibold"
              fontSize="md"
            >
              OUR TECHNOLOGIES
            </Title>
            <Title
              weight="semibold"
              className="tracking-wider pl-3 "
              marginTop="mt-7"
              marginBottom="mb-5"
              fontSize="4xl"
            >
              A SPOTLIGHT ON
            </Title>
            <Title
              weight="semibold"
              fontSize="4xl"
              className="italic pl-3 "
              marginBottom="mb-12"
            >
              {" "}
              SUSTAINABILITY
            </Title>
            <Title weight="light" className="text-left  w-[71%]" height="6">
              Green Boom aims to forever change oil-spill cleanup and ensure a
              greener future.
            </Title>
          </div>
        </div>
        <div className="mr-[20%] w-[60%]">
          <img src={header} alt="" />
        </div>
      </div>
      <div className="flex ml-[60%] -mt-10">
        <img src={cloud} width={400} alt="" />
      </div>
      <div className="flex flex-row">
        <div className="mt-10 ml-[3%] w-[50%]">
          <img src={cloud2} width={400} alt="" />
          <img src={waste1} className="-mt-[48%] ml-[25%]" alt="" />
          <img src={waste2} className="mt-[4%] ml-[25%]" alt="" />
          <img src={tri} className="-mt-[47%] ml-[77%]" alt="" />
        </div>
        <div className="w-[60%] mt-[8%]">
          <Title
            className="text-primaryA"
            weight="semibold"
            letterSpace="wider"
          >
            INDUSTRIAL SORBENTS = INDUSTRIAL WASTE
          </Title>
          <Title
            marginTop="mt-6"
            fontSize="4xl"
            letterSpace="wider"
            weight="semibold"
            height="10"
            className="w-[50%]"
          >
            The other guys are trying to solve one problem just to create
            another.
          </Title>
          <Title
            height="6"
            marginTop="mt-[20%]"
            weight="light"
            className="w-[66%]"
          >
            The oil spill cleanup industry has been cleaning up its spills
            simply by moving the incident from one location to another. Other
            sorbent brand products on the market are non-biodegradable
            polypropylene-based — single use plastic which is made using
            traditional manufacturing processes that cause land and water
            pollution.
          </Title>
        </div>
      </div>
      <div className="mt-40 ml-[640px] flex flex-row">
        <div>
          <div className="flex flex-row mb-7">
            <img src={dot1} width={12} alt="" />
            <Title className="w-64 pl-4">
              Each competitor's 10 lb. boom is equivalent to 3000 plastic
              straws.
            </Title>
          </div>
          <div className="flex flex-row mb-7">
            <img src={dot2} width={12} alt="" />
            <Title className="w-64 pl-4">
              Even minor oil spills often require multiples of truckloads of
              booms.
            </Title>
          </div>
          <div className="flex flex-row pb-24">
            <img src={dot3} width={12} alt="" />
            <Title className="w-64 pl-4">
              Polypropylene products end up in landfills, never breaking down.
            </Title>
          </div>
        </div>
        <div className="-mt-28">
          <img
            src={arrow}
            width={100}
            alt=""
            className="ml-16 tranform rotate-12 pb-5"
          />
          <Title
            height="6"
            className="pl-20 w-56 italic text-gray-400"
            weight="semibold"
          >
            The founders of Green Boom never thought that made any sense.{" "}
          </Title>
        </div>
      </div>
    </>
  );
}

export default ScienceHeader;
