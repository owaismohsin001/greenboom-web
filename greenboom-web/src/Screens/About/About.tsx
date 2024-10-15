import DefaultLayout from "../../layout/DefaultLayout";
import Title from "../../Components/Title/Title";
import about from "../../assets/about.png";
import founders from "../../assets/founders.png";
import aboutArrow from "../../assets/aboutArrow.svg";
import stage1 from "../../assets/stage1.png";
import stage2 from "../../assets/stage2.png";
import stage3 from "../../assets/stage3.png";
import aboutMap from "../../assets/aboutMap.png";
import aboutCloud from "../../assets/aboutCloud.png";

function About() {
  return (
    <DefaultLayout>
      <div>
        <Title
          fontSize="4xl"
          weight="bold"
          marginTop="mt-16"
          className="text-center"
        >
          About Green Boom
        </Title>
        <div className="flex flex-row">
          <div className="w-[60%]">
            <Title
              weight="normal"
              fontSize="lg"
              height="relaxed"
              marginTop="mt-28"
              className="ml-28 mr-5"
            >
              For too long oil spill cleanup has mainly been done with
              polypropylene-based absorbents. A plastic waste issue that is
              seldom spoken about, but annually generates 8000 tons of
              oil-soaked plastics that end up in landfills around the world,
              taking years to break down into microplastics. The founders of
              Green Boom never thought that made sense.{" "}
            </Title>
          </div>
          <div className="w-[40%]">
            <img src={about} alt="" className="mt-20" />
          </div>
        </div>
        {/* about founders */}
        <div>
          {/* <Title
            color="primaryA"
            fontSize="lg"
            weight="bold"
            marginTop="mt-3"
            height="relaxed"
            className="text-center ml-[75%] mr-[10%] italic"
          >
            An oil spill issue solved with a plastic waste issue
          </Title> */}
          {/* <Title
            color="primaryA"
            fontSize="lg"
            weight="bold"
            marginTop="mt-3"
            height="relaxed"
            className="text-center ml-[75%] mr-[10%] italic"
          >
            An oil spill issue solved with a plastic waste issue
          </Title> */}
          <div className="flex flex-row">
            <div className="w-[50%] ml-[10%] mt-0">
              <img src={founders} alt="" className=" ml-[15%] mt-16  " />
              <button className="bg-sky py-3 px-9 rounded-lg ml-[11%] text-xl font-normal tracking-widest hover:bg-primaryA">
                Read more about the founders
              </button>
            </div>
            <div className="w-[50%]">
              <Title
                color="primaryA"
                fontSize="lg"
                weight="bold"
                marginTop="mt-3"
                height="relaxed"
                className="text-center ml-[55%] mr-[15%] italic"
                className="text-center ml-[55%] mr-[15%] italic"
              >
                An oil spill issue solved with a plastic waste issue
              </Title>
              <Title fontSize="xl" height="relaxed" className="pt-5   ">
              <Title fontSize="xl" height="relaxed" className="pt-5   ">
                Through extensive research and testing starting in Atlanta 2019,
                the founders Sudhir Sharma, Phd and Yulin Deng, Phd, developed a
                lineup of innovative and 100% biodegradable products. Absorbents
                that clean the environment, just as well as the polypropylene
                equivalents, but without generating waste. That's how we got our
                name, we make Green Booms, simple as that.
              </Title>
            </div>
          </div>
        </div>
        {/* biodegrade */}
        <div className="ml-[22%] mt-20">
          <div className="flex flex-row items-center">
            <img src={stage1} alt="" className="w-52" />
            <img src={aboutArrow} alt="" className="w-20 mt-28" />
            <div className="w-[35%] ml-[15%] mr-[24%] -mt-16">
              <Title
                color="primaryA"
                weight="semibold"
                className="italic"
                className="tracking-widest text-center"
                height="6"
              >
                In as little as four weeks our products biodegrade. Compare that
                to the time it takes for plastic to break down!
              </Title>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <img src={stage2} alt="" className="w-48 ml-[20%]" />
            <img src={aboutArrow} alt="" className="w-20 mt-10" />
          </div>
          <img src={stage3} alt="" className="ml-[40%] w-48 -mt-16" />
        </div>
        <Title
          height="5"
          fontSize="md"
          className="w-1/3 ml-[12%]"
          marginBottom="mb-16"
        >
          Although, products have to be more than just sustainable to sell.
          That's why the Green Boom absorbents also have a high absorption
          capacity, heat resistance, are easy to reuse and priced competitively.
        </Title>
        <Title
          weight="semibold"
          fontSize="2xl"
          className="italic text-center"
          marginBottom="mb-10"
        >
          So you don't have to choose between price and quality or
          sustainability
        </Title>

        <div className="flex flex-row">
          <div className="w-[50%] flex ml-[20%] mt-7 justify-end items-end">
            <img src={aboutMap} alt="" />
          </div>
          <div className="w-[50%] ml-5 mt-10 flex justify-start items-start mr-[17%]">
            <Title weight="light" height="6" className="text-right">
              In 2021 we started our manufacturing in Norcross, outside Atlanta.
              One year later Green Boom opened up a European sales office and
              partnered up with companies in the Middle East, to supply globally
              with the revolutionary line of absorbents. In 2024 the
              manufacturing moved to Duluth, GA to increase the production
              capacity.
            </Title>
          </div>
        </div>

        <div className="mt-12 flex justify-center items-center relative">
          <img src={aboutCloud} alt="" className="" />
          <div className="absolute -mt-6 left-0 flex justify-center items-center w-[60%] ml-[20%]  h-full">
            <Title
              className="text-center"
              fontSize="2xl"
              weight="semibold"
              height="7"
              color="white"
            >
              Green Boom, a pioneering Clean-Tech company, revolutionizing the
              way oil clean-ups are managed. Green Boom offers a holistic Oil to
              Soil solution that no other company can! Our patented Sorbents,
              combined with an Oil-Eating Microbe, and Composting process not
              only solve oil clean-ups but actively contribute to our planet's
              health.
            </Title>
          </div>
        </div>
        <Title
          className="text-gray-400 italic ml-[40%]"
          marginBottom="mb-8"
          marginTop="mt-8"
          fontSize="lg"
          weight="medium"
        >
          TRY it today!
        </Title>
        <button
          onClick={handleButton}
          className="bg-sky rounded px-6 ml-[44%] text-lg text-white py-2 transition duration-0 ease-in-out hover:bg-red-500 hover:text-black hover:animate-hoverEffect"
        >
          Get Green
        </button>
        <div className="relative  ml-[20%] mt-[10%]">
          <img src={cloud} alt="" width={200} />
          <Title
            color="black"
            weight="normal"
            fontSize="lg"
            className="absolute -mt-28 w-32 text-center ml-10"
          >
            Watch a video about us!
          </Title>
          {/* <img src={downArrow} width={100} alt="" /> */}
          <img
            src={downArrow}
            width={100}
            alt="arrow"
            className="transform rotate-180 scale-x-[-1] ml-[10%]"
          />
          {/* <div className="flex justify-center items-center h-screen mb-0 md:mb-16"> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bccIJHrxfx0?si=X9EzNb2iaq4UnwJf"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="ml-[25%] -mt-20 mb-44"
          ></iframe>
          {/* </div> */}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default About;
