import Title from "../Title/Title";
import environment1 from "../../assets/Home/environment1.svg";
import environment2 from "../../assets/Home/environment2.svg";
import environment3 from "../../assets/Home/environment.svg";
import cloud from "../../assets/Home/cloud.svg";
import hero from "../../assets/Home/hero.png";
import { useNavigate } from "react-router-dom";
function EnvironmentFriendly() {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/products");
  };
  return (
    <div className="mt-40">
      <div className="ml-60 mr-60 ">
        <Title
          className="italic text-gray-400 text-center"
          fontSize="lg"
          weight="medium"
        >
          ENVIRONMENTALLY FRIENDLY!
        </Title>
        <Title
          weight="medium"
          className="text-center"
          fontSize="2xl"
          letterSpace="wider"
          marginTop="mt-7"
        >
          GREEN BOOM CAN BE USED IN ANY SETTING
        </Title>
      </div>
      <div className="ml-52 mr-52 grid grid-cols-3 pt-20 gap-20">
        {/* col 1 */}
        <div className="">
          <img src={environment1} className="pb-9 mx-auto " width={200} />
          <Title
            className="text-center"
            weight="medium"
            fontSize="xl"
            marginBottom="mb-6"
          >
            MARINE
          </Title>
          <Title className="text-center" weight="light" fontSize="lg">
            Green Boom products are lightweight and float on top of the water to
            absorb oil sheens without absorbing a drop of water.
          </Title>
        </div>
        {/* col 2 */}
        <div className="">
          <img src={environment2} className="pb-9 mx-auto" width={170} />
          <Title
            className="text-center"
            weight="medium"
            fontSize="xl"
            marginBottom="mb-6"
            marginTop="mt-2"
          >
            LAND
          </Title>
          <Title className="text-center" weight="light" fontSize="lg">
            Green Boom’s patented lightweight absorbents are easier, safer, and
            more eco friendly than the clay-based competitors.
          </Title>
        </div>
        {/* col 3 */}
        <div className="">
          <img src={environment3} className="pb-9 mx-auto" width={190} />
          <Title
            className="text-center"
            weight="medium"
            fontSize="xl"
            marginBottom="mb-6"
            marginTop="mt-1"
          >
            INDUSTRIAL
          </Title>
          <Title className="text-center" weight="light" fontSize="lg">
            Green Boom’s tear-resistant moldable socks help control everyday
            leaks with our most shape-hugging sock.
          </Title>
        </div>
      </div>

      <div className="flex flex-row ml-44 mr-44">
        <div className="pt-32 w-[50%]">
          <img src={hero} alt="" />
          <img src={cloud} width={120} className="ml-[560px] -mt-20" alt="" />
        </div>
        <div className="w-[50%]">
          <Title fontSize="5xl" className="pt-64 pl-28" weight="medium">
            Naturally Better
          </Title>
          <Title
            className="text-right pl-4 ml-1 w-[450px]"
            weight="light"
            marginTop="mt-10"
            fontSize="md"
            height="6"
            letterSpace="wider"
          >
            Green Boom products are made from 100% sustainably sourced,
            renewable raw materials. We’re also priced competitively so you
            don’t have to choose between performance or the environment.
          </Title>
          <button
            className="mt-10 ml-80 bg-primaryA text-white px-8 py-2 hover:bg-white hover:text-black rounded-md cursor-pointer"
            onClick={handleButton}
          >
            Get Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default EnvironmentFriendly;
