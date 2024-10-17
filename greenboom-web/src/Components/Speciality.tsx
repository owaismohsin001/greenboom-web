import Title from "./Title/Title";
import special1 from "../assets/Science/special1.png";
import special2 from "../assets/Science/special2.png";
import special3 from "../assets/Science/special3.png";
import dot4 from "../assets/Science/dot4.svg";
import dot5 from "../assets/Science/dot5.svg";
import dot6 from "../assets/Science/dot6.svg";
import dot7 from "../assets/Science/dot7.svg";
import dot8 from "../assets/Science/dot8.svg";
import dot9 from "../assets/Science/dot9.svg";
import oily from "../assets/Science/oily.png";
function Speciality() {
  return (
    <div>
      <Title
        className="text-gray-400 text-center italic"
        marginTop="mt-10"
        fontSize="xl"
        weight="bold"
      >
        A GAME CHANGER
      </Title>
      <Title
        className="text-center"
        weight="semibold"
        marginTop="mt-7"
        fontSize="2xl"
      >
        PATENTED TECHNOLOGY & MANUFACTURING
      </Title>
      <div className="flex justify-center">
        <Title
          className="text-center w-[45%]"
          height="6"
          marginTop="mt-6"
          weight="light"
        >
          As the industry’s leading manufacturer of zero polypropylene,
          biomass-only, completely hydrophobic, oil-only absorbents, our
          patented revolutionary line of eco-friendly absorbent products works
          for oil spill prevention, response and remediation.
        </Title>
      </div>
      <div className="grid grid-cols-3 ml-40 mr-36 mt-10 ">
        <div className="w-[250px] ">
          <img src={special1} alt="" className="" />
          <Title
            fontSize="2xl"
            weight="semibold"
            marginTop="mt-5"
            height="8"
            className="text-center"
          >
            100% BIODEGRADABLE SKIN
          </Title>
          <Title weight="light" height="6" className="mt-5 text-center">
            Patented biodegradable treated Cotton (skin) casing for absorbent
            material
          </Title>
          <div className="flex flex-row mt-3">
            <img src={dot4} width={10} alt="" />
            <Title fontSize="md" className="pl-3 pt-6" height="6">
              Stronger and better performing than polypropylene.
            </Title>
          </div>
          <div className="flex flex-row mt-5">
            <img src={dot5} width={10} alt="" />
            <Title fontSize="md" className="pl-3 -pt-4" height="6">
              Only lets oil pass through.
            </Title>
          </div>
          <div className="flex flex-row mt-1">
            <img src={dot6} width={10} className="-mt-6" alt="" />
            <Title fontSize="md" className="pl-3 mt-5" height="6">
              All Green Boom materials have been independently tested and pass
              TCLP.
            </Title>
          </div>
        </div>
        <div className="w-[250px] ">
          <img src={special2} alt="" className="mt-10" />
          <Title fontSize="2xl" weight="semibold" marginTop="mt-14" height="8">
            BIODEGRADABLE HYDROPHOBIC FILLER
          </Title>
          <Title weight="light" height="6" className="mt-5 text-center">
            Patented treated biomass (filler) is the material inside the skin
            that absorbs oil
          </Title>
          <div className="flex flex-row mt-3">
            <img src={dot7} width={10} alt="" />
            <Title fontSize="md" className="pl-3 pt-4" height="6">
              Repels water and absorbs oil-only.
            </Title>
          </div>
          <div className="flex flex-row mt-5">
            <img src={dot8} width={10} alt="" className="-mt-6" />
            <Title fontSize="md" className="pl-3 " height="6">
              “Quick wicking” nature for faster absorption rate.
            </Title>
          </div>
          <div className="flex flex-row mt-1">
            <img src={dot9} width={10} className="" alt="" />
            <Title fontSize="md" className="pl-3 mt-5" height="6">
              Made from 100% natural fibers - zero plastic waste.
            </Title>
          </div>
        </div>
        <div className="w-[280px] ">
          <img src={special3} alt="" className="" />
          <Title
            fontSize="2xl"
            weight="semibold"
            marginTop="mt-3"
            className="text-center"
            height="8"
          >
            OIL-DEGRADING REMEDIATION MATERIAL
          </Title>
          <Title
            weight="light"
            height="6"
            className="mt-5 text-center"
            marginBottom="mb-7"
          >
            Hydrocarbon eating bacteria only thrive in oil-rich conditions
          </Title>
          <div className="flex flex-row mt-3">
            <img src={dot6} width={10} alt="" />
            <Title fontSize="md" className="pl-3 pt-4" height="6">
              Optional remediation material can be added to degrade absorbed
              oil.
            </Title>
          </div>
          <div className="flex flex-row mt-5">
            <img src={dot8} width={10} alt="" className="-mt-10" />
            <Title fontSize="md" className="pl-3 -pt-4" height="6">
              Save on disposal costs depending on your clean up project and
              location.
            </Title>
          </div>
        </div>
      </div>
      <div className="mt-28 ml-72 mr-40 flex flex-row gap-6">
        <div>
          <iframe
            width="400"
            height="225"
            src="https://www.youtube.com/embed/lfeFhlZcsbI?si=IN6aTZLO9kruZHfJ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="flex">
          <img src={oily} alt="" className="pt-12" />
          <Title
            className="text-primaryA italic pt-5 pl-4 w-64"
            fontSize="lg"
            weight="semibold"
            height="6"
          >
            Watch a video about the circular process!
          </Title>
        </div>
        <Title marginTop="mt-20" className="-ml-52">
          Psst... it's about me!
        </Title>
      </div>
    </div>
  );
}

export default Speciality;
