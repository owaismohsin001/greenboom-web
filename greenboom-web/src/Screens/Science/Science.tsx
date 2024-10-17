import React from "react";
import ScienceHeader from "../../Components/ScienceHeader";
import Title from "../../Components/Title/Title";
import highlightArrow from "../../assets/Science/highlightArrow.svg";
import highlight from "../../assets/Science/highlight.svg";
import circle from "../../assets/Science/circle.svg";
import grid from "../../assets/Science/grid.png";
import dot4 from "../../assets/Science/dot4.svg";
import dot5 from "../../assets/Science/dot5.svg";
import dot6 from "../../assets/Science/dot6.svg";
import dot7 from "../../assets/Science/dot7.svg";
import dot8 from "../../assets/Science/dot8.svg";
import dot9 from "../../assets/Science/dot9.svg";
import Speciality from "../../Components/Speciality";
import DefaultLayout from "../../layout/DefaultLayout";
function Science() {
  return (
    <div>
      <DefaultLayout>
        <ScienceHeader />
        <div className="ml-40 mr-24 flex flex-row">
          <div className="w-[50%]">
            <Title className="text-primaryA" weight="semibold">
              A LEAVE NO TRACE SOLUTION
            </Title>
            <Title fontSize="5xl" weight="semibold" marginTop="mt-7">
              The science behind easier clean up.
            </Title>
            <Title
              weight="light"
              marginTop="mt-5"
              marginBottom="mb-24"
              height="6"
              className="w-96"
            >
              Through extensive research and development, we have developed a
              lineup of innovative ‘green’ products that clean the environment
              while saving on overall cleanup time and costs.
            </Title>

            <img
              src={highlight}
              width={130}
              className="-mt-[170px] ml-52"
              alt=""
            />
            <img
              src={highlightArrow}
              width={100}
              height={80}
              className="ml-80 -mt-2"
              alt=""
            />
            <Title
              className="text-gray-400 mt-4 w-28 italic ml-96"
              weight="semibold"
            >
              WE'VE GOT 'EM ALL!
            </Title>
          </div>
          <div className="w-[50%] mb-24">
            <img src={circle} alt="" width={450} />
            <img src={grid} alt="" className="-mt-[450px] " />
          </div>
        </div>
        <div className="ml-40">
          <Title
            className="text-primaryA"
            weight="semibold"
            marginBottom="mb-7"
          >
            We've got em all...
          </Title>
          <div className="ml-4">
            <div className="flex flex-row">
              <img src={dot4} alt="" className="w-5 pr-2" />
              <Title>Loose Sorbent for Land Use</Title>
            </div>
            <div className="flex flex-row pt-3">
              <img src={dot5} alt="" className="w-5 pr-2" />
              <Title>Loose Sorbent for Water Surface/Sheen</Title>
            </div>
            <div className="flex flex-row pt-3">
              <img src={dot6} alt="" className="w-5 pr-2" />
              <Title>Oil-Only Pillows</Title>
            </div>
            <div className="flex flex-row pt-3">
              <img src={dot7} alt="" className="w-5 pr-2" />
              <Title>Oil-Only Socks</Title>
            </div>
            <div className="flex flex-row pt-3">
              <img src={dot8} alt="" className="w-5 pr-2" />
              <Title>Oil-Only Booms</Title>
            </div>
            <div className="flex flex-row pt-3">
              <img src={dot9} alt="" className="w-5 pr-2" />
              <Title>Oil-Only Mats</Title>
            </div>
          </div>
        </div>
        <Speciality />
      </DefaultLayout>
    </div>
  );
}

export default Science;
