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
import CertifiedSciencePage from "../../Components/CertifiedSciencePage";
import ChemicalExperts from "../../Components/ChemicalExperts";
import endBanner from "../../assets/Science/endBanner.png";
import whiteDot from "../../assets/Science/whiteDot.svg";
import whiteDot5 from "../../assets/Science/whiteDot5.svg";
import whiteDot6 from "../../assets/Science/whiteDot6.svg";
import whiteDot7 from "../../assets/Science/whiteDot7.svg";
import { useNavigate } from "react-router-dom";
function Science() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/products");
  };
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
        <CertifiedSciencePage />
        <ChemicalExperts />
        <div className="flex justify-center items-center mt-12 mb-24 ml-40">
          <img src={endBanner} alt="" />
          <div className="flex flex-row pl-20 pr-20 -ml-[1000px] -mt-10">
            <div className="w-[50%] pl-20 ">
              <Title
                className="text-white italic w-[40%]"
                weight="bold"
                fontSize="2xl"
                marginTop="mt-16 "
              >
                WE'VE GOT YOU COVERED
              </Title>
              <button
                onClick={handleButton}
                className="mt-28 bg-sky px-5 py-2 text-primaryA rounded-lg text-sm tracking-wider hover:bg-gray-300"
              >
                BE PREPARED
              </button>
            </div>
            <div className="w-[50%] mt-16 pl-12">
              <Title
                className="text-white w-[70%]"
                height="5"
                weight="semibold"
              >
                The Green Boom Spill Kit has everything you need to tackle the
                smaller industry messes when they show up.
              </Title>
              <div className="flex flex-col gap-2 mt-12 ml-14">
                <div className="flex flex-row">
                  <img src={whiteDot} width={8} alt="" />
                  <Title
                    color="white"
                    fontSize="sm"
                    weight="light"
                    className="pl-4"
                  >
                    Loose Sorbent
                  </Title>
                </div>
                <div className="flex flex-row">
                  <img src={whiteDot5} width={8} alt="" />
                  <Title
                    color="white"
                    fontSize="sm"
                    weight="light"
                    className="pl-4"
                  >
                    Sorbent Pillows
                  </Title>
                </div>
                <div className="flex flex-row">
                  <img src={whiteDot6} width={8} alt="" />
                  <Title
                    color="white"
                    fontSize="sm"
                    weight="light"
                    className="pl-4"
                  >
                    Sorbent Socks
                  </Title>
                </div>
                <div className="flex flex-row">
                  <img src={whiteDot7} width={8} alt="" />
                  <Title
                    color="white"
                    fontSize="sm"
                    weight="light"
                    className="pl-4"
                  >
                    Sorbent Mats
                  </Title>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default Science;
