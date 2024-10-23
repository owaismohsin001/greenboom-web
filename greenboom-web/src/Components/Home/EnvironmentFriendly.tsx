import Title from "../Title/Title";
import environment1 from "../../assets/Home/environment1.svg";
import environment2 from "../../assets/Home/environment2.svg";
import environment3 from "../../assets/Home/environment.svg";
function EnvironmentFriendly() {
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
          <Title className="text-center " weight="light" fontSize="lg">
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
    </div>
  );
}

export default EnvironmentFriendly;
