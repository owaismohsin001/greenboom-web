import React from "react";
import Header from "../../Components/Home/Header";
import DefaultLayout from "../../layout/DefaultLayout";
import Uniqueness from "../../Components/Home/Uniqueness";
import oily2 from "../../assets/Home/oily2.png";
import textArea from "../../assets/Home/textArea.svg";
import Title from "../../Components/Title/Title";
import EnvironmentFriendly from "../../Components/Home/EnvironmentFriendly";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Performance from "../../Components/Home/Performance";
import Recomendations from "../../Components/Home/Recomendations";

function Home() {
  return (
    <DefaultLayout>
      <div>
        <Header />
        <Uniqueness />
        <div className="ml-72 mr-60 pt-10 pb-20">
          <img src={oily2} className="mt-72" alt="" />
          <div className="relative -mt-[430px]  ml-40">
            <img src={textArea} width={450} height={300} alt="" />

            {/* Div for text with absolute positioning */}
            <div className="absolute inset-0 flex flex-col  items-center px-6 text-left w-[70%]   ">
              <Title
                color="white"
                marginBottom="mb-3"
                marginTop="mt-7"
                fontSize="lg"
                height="6"
                className="text-white font-light bg-sky"
              >
                Every day, a staggering{" "}
                <span className="font-semibold">50,000 lbs</span> (22,000 kg) of
                plastic absorbents are used globally to clean oil spills. This
                is equivalent to{" "}
                <span className="font-semibold">2 million plastic bottles</span>{" "}
                entering our environment daily.
              </Title>
              <Title
                color="white"
                fontSize="lg"
                height="6"
                className="text-white font-light  mt-4"
              >
                By switching to Green Boom, we can collectively work towards
                minimizing plastic waste from oil spill cleanups to{" "}
                <span className="font-semibold">zero.</span>
              </Title>
            </div>
          </div>
        </div>
        <EnvironmentFriendly />
        <Performance />

        <div className="pt-16">
          <Title
            className="text-gray-400 text-center italic"
            letterSpace="wide"
            marginTop="mt-24"
            weight="bold"
            fontSize="xl"
          >
            QUOTES FROM CUSTOMERS
          </Title>
          <Title
            className="text-center "
            letterSpace="wide"
            marginTop="mt-12"
            weight="light"
            fontSize="md"
          >
            We value feedback from our customers and strive to improve our
            products for their applications.
          </Title>
          <Title
            className="text-center "
            letterSpace="wide"
            marginTop="mt-3"
            weight="light"
            fontSize="md"
          >
            Here’s some mentions that made us blush.
          </Title>
        </div>
        <Testimonials />
        <Recomendations />
      </div>
    </DefaultLayout>
  );
}

export default Home;
