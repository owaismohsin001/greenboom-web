import React from "react";
import Title from "../../Components/Title/Title";
import top1 from "../../assets/News/top1.png";
import top2 from "../../assets/News/top2.png";
import top3 from "../../assets/News/top3.png";
import secondLayer1 from "../../assets/News/secondLayer1.png";
import secondLayer2 from "../../assets/News/secondLayer2.png";
import secondLayer3 from "../../assets/News/secondLayer3.png";
function Header() {
  return (
    <div className="bg-white grid grid-cols-3 gap-10">
      <div>
        <img src={top1} alt="" />
        <Title
          className="text-left w-72 pl-6"
          marginTop="mt-6"
          fontSize="2xl"
          weight="medium"
          height="8"
        >
          Green Boom Partners with Dalton Safety to Expand Sustainable...
        </Title>
        <Title
          className="text-left w-64 pl-6"
          marginTop="mt-3"
          height="6"
          weight="light"
        >
          DULUTH, GA (October 1st, 2024) In a move towards expanding sustainable
          spill solutions, Gree...
        </Title>

        <div className="pt-32">
          <div className="relative">
            <img src={secondLayer1} alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <Title
                className="px-4 text-left pl-7"
                fontSize="xl"
                weight="medium"
                height="6"
                marginTop="mt-16"
              >
                Interview with Nicholle Wersland, President and Global COO, in
                Easy...
              </Title>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src={top2} alt="" />
        <Title
          className="text-left w-72 pl-6"
          marginTop="mt-6"
          fontSize="2xl"
          weight="medium"
          height="8"
        >
          Green Boom’s Nicholle Wersland Named Finalist for the...
        </Title>
        <Title
          className="text-left w-64 pl-6 "
          marginTop="mt-3"
          height="6"
          weight="light"
        >
          Green Boom’s Nicholle Wersland Named Finalist for the Prestigious 2024
          Environment 100 List
        </Title>

        <div className="pt-32">
          <div className="relative">
            <img src={secondLayer2} alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white ">
              <Title
                className="px-4 text-left pr-10 pl-7"
                height="6"
                fontSize="xl"
                weight="medium"
                marginTop="mt-16"
              >
                Green Boom Expands Product Line to The Home Depot
              </Title>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={top3} alt="" />
        <Title
          className="text-left w-72 pl-6"
          marginTop="mt-6"
          fontSize="2xl"
          weight="medium"
          height="8"
        >
          Green Boom Achieves ISO-9001:2015 Certification
        </Title>
        <Title
          className="text-left w-64 pl-6 "
          marginTop="mt-3"
          height="6"
          weight="light"
        >
          Compostable Oil Absorbent Supplier Certified for Quality Management
          ATLANTA (July 11,...
        </Title>

        <div className="pt-32">
          <div className="relative">
            <img src={secondLayer3} alt="" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white ">
              <Title
                className="px-4 text-left pr-10 pl-7"
                height="6"
                fontSize="xl"
                weight="medium"
                marginTop="mt-16"
              >
                Where are our previous interns today?
              </Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
