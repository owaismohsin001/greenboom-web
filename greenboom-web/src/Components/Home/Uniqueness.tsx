import Title from "../Title/Title";
import unique from "../../assets/Home/uniques.png";
import certi1 from "../../assets/Home/certi1.png";
import certi2 from "../../assets/Home/certi2.png";
import certi3 from "../../assets/Home/certi3.svg";

function Uniqueness() {
  return (
    <div className="ml-60 mr-60 mt-20">
      <Title fontSize="4xl" weight="semibold" marginBottom="mb-12" className="">
        First and Only in the World!
      </Title>
      {/* first row */}
      <div className="flex flex-row gap-12">
        <div className="w-[50%]">
          <Title
            className="text-primaryA italic"
            fontSize="2xl"
            weight="semibold"
            marginBottom="mb-3"
          >
            1. 100% Biomass & COMPOSTABLE
          </Title>
          <Title weight="light" fontSize="lg" className="w-80">
            Patented oil absorbents made from renewable and compostable
            materials
          </Title>
        </div>
        <div className="w-[50%]">
          <Title
            className="text-primaryA italic"
            fontSize="2xl"
            weight="semibold"
            marginBottom="mb-3"
          >
            4. Gov Compliance & BioPreferred
          </Title>
          <Title weight="light" fontSize="lg" className="w-80">
            The BioPreferred absorbents meet standards for federal purchasing
            guidelines and mandates.
          </Title>
          <img src={unique} alt="" className="ml-64 pl-2 -mt-4" />
        </div>
      </div>
      {/* second row */}
      <div className="flex flex-row gap-12 mt-16">
        <div className="w-[50%]">
          <Title
            className="text-primaryA italic"
            fontSize="2xl"
            weight="semibold"
            marginBottom="mb-3"
          >
            2. Zero Waste & Zero Plastic
          </Title>
          <Title weight="light" fontSize="lg" className="w-80">
            No need to any longer treat oil spills with single-use plastics. Our
            Oil-to-Soil solution reduces the cleanup waste to Zero.
          </Title>
        </div>
        <div className="w-[50%]">
          <Title
            className="text-primaryA italic"
            fontSize="2xl"
            weight="semibold"
            marginBottom="mb-3"
          >
            5. Superior Performance
          </Title>
          <Title weight="light" fontSize="lg" className="w-80">
            High absorption rate and capacity with products that won´t melt or
            break.
          </Title>
        </div>
      </div>

      {/* third row */}
      <div className="flex flex-row gap-12 mt-16">
        <div className="w-[50%]">
          <Title
            className="text-primaryA italic"
            fontSize="2xl"
            weight="semibold"
            marginBottom="mb-3"
          >
            3. No Transport & Landfill Costs
          </Title>
          <Title weight="light" fontSize="lg" className="w-80">
            Easy process to remediate the waste through composting. Become
            cost-effective and skip the toxic waste costs.
          </Title>
        </div>
        <div className="w-[50%]">
          <Title
            className="text-primaryA italic"
            fontSize="2xl"
            weight="semibold"
            marginBottom="mb-3"
          >
            6. Certifications like no other
          </Title>
          <Title weight="light" fontSize="lg" className="w-80">
            Green Boom has the only EPA, USDA, BioPreferred and TÜV certified
            oil absorbents in the world!
          </Title>
          <img src={certi1} width={100} className="ml-48 -mt-0" alt="" />
          <img src={certi2} className="ml-72 -mt-10  " alt="" />
          <img src={certi3} className="ml-80 -mt-36 " width={120} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Uniqueness;
