import Title from "../Title/Title";
import performance1 from "../../assets/Home/performance1.svg";
import performance2 from "../../assets/Home/performance2.svg";
import performance3 from "../../assets/Home/performance3.svg";
function Performance() {
  return (
    <div>
      <div className="ml-60 mr-60 ">
        <Title
          className="italic text-gray-400 text-center"
          fontSize="lg"
          weight="medium"
          marginTop="mt-32"
          letterSpace="widest"
        >
          SUPERIOR TO POLYPROPYLENE!
        </Title>
        <Title
          weight="medium"
          className="text-center"
          fontSize="2xl"
          letterSpace="wider"
          marginTop="mt-7"
          marginBottom="mb-10"
        >
          OUR ABSORBANCE PERFORMANCE REIGNS SUPREME
        </Title>
      </div>
      <div className="ml-52 mr-52 grid grid-cols-3 pt-20 gap-24">
        {/* col 1 */}
        <div className="">
          <img src={performance1} className="pb-9 mx-auto " width={150} />
          <Title
            className="text-center pt-6"
            weight="medium"
            fontSize="xl"
            marginBottom="mb-6"
          >
            CAPACITY
          </Title>
          <Title
            className="text-center"
            weight="light"
            fontSize="md"
            height="6"
          >
            The hydrophobic skin of Green Boom products are able to absorb more
            than 4x their weight in oil - that’s way better than the
            polypropylene-based competitors.
          </Title>
        </div>
        {/* col 2 */}
        <div className="">
          <img src={performance2} className="pb-9 mx-auto" width={90} />
          <Title
            className="text-center"
            weight="medium"
            fontSize="xl"
            marginBottom="mb-6"
            marginTop="mt-2"
          >
            RATE
          </Title>
          <Title
            className="text-center"
            weight="light"
            fontSize="md"
            height="6"
          >
            Our fast-wicking materials have 90% absorption within the first five
            minutes of contact. That also means faster clean-up time - now
            doesn’t that sound nice?
          </Title>
        </div>
        {/* col 3 */}
        <div className="">
          <img src={performance3} className="pb-8 mx-auto pt-10" width={150} />
          <Title
            className="text-center pt-12"
            weight="medium"
            fontSize="xl"
            marginBottom="mb-6"
            marginTop="mt-1"
          >
            DURABILITY
          </Title>
          <Title
            className="text-center"
            weight="light"
            fontSize="md"
            height="6"
          >
            Green Boom has the toughest products on the market, each designed to
            last through multiple uses before bio-friendly disposal.
          </Title>
        </div>
      </div>
    </div>
  );
}

export default Performance;
