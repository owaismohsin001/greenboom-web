// import React from "react";
// import Header from "../../Components/Home/Header";
// import DefaultLayout from "../../layout/DefaultLayout";
// import Uniqueness from "../../Components/Home/Uniqueness";
// import oily2 from "../../assets/Home/oily2.png";
// import textArea from "../../assets/Home/textArea.svg";
// import Title from "../../Components/Title/Title";

// function Home() {
//   return (
//     <DefaultLayout>
//       <div>
//         <Header />
//         <Uniqueness />
//         <div className="ml-60 mr-60">
//           <img src={oily2} className="mt-72" alt="" />
//           <img src={textArea} width={500} height={300} alt="" />
//           <div>
//             <Title color="white" className="bg-sky">
//               Every day, a staggering{" "}
//               <span className="font-semibold">50,000 lbs</span> (22,000 kg) of
//               plastic absorbents are used globally to clean oil spills. This is
//               equivalent to
//               <span className="font-semibold">
//                 {" "}
//                 2 million plastic bottles
//               </span>{" "}
//               entering our environment daily.
//             </Title>
//             <Title color="white" className="bg-sky">
//               By switching to Green Boom, we can collectively work towards
//               minimizing plastic waste from oil spill cleanups to
//               <span className="font-semibold"> zero.</span>
//             </Title>
//           </div>
//         </div>
//       </div>
//     </DefaultLayout>
//   );
// }

// export default Home;

import React from "react";
import Header from "../../Components/Home/Header";
import DefaultLayout from "../../layout/DefaultLayout";
import Uniqueness from "../../Components/Home/Uniqueness";
import oily2 from "../../assets/Home/oily2.png";
import textArea from "../../assets/Home/textArea.svg";
import Title from "../../Components/Title/Title";
import EnvironmentFriendly from "../../Components/Home/EnvironmentFriendly";
import Performance from "../../Components/Home/Performance";

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
      </div>
    </DefaultLayout>
  );
}

export default Home;
