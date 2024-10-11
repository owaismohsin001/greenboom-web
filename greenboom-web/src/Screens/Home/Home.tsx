// import React from "react";
// import mascot from "../../assets/mascot.png";
// import applestore from "../../assets/applestore.png";
// import playstore from "../../assets/playstore.png";
// import Title from "../../Components/Title/Title";
// import Register from "../../Components/Register";
// import Venders from "../../Components/Venders";

// function Home() {
//   return (
//     <>
//       <div className="relative flex flex-row items-start pt-20 ml-[12%]">
//         <img
//           src={mascot}
//           className="w-64 absolute left-[-10px] top-[130px]"
//           alt="Mascot"
//         />
//         <div className="bg-primaryA rounded-xl ml-40 mr-36">
//           <div className="pl-36 pr-16 pt-12">
//             <Title fontSize="2xl" weight="bold" color="white" className="pb-7">
//               Download the Training Mobile App
//             </Title>
//             <Title color="white" height="6" weight="semibold" className="pb-10">
//               In the app, you can find for example presentations, catalogs,
//               flyers, videos, FAQs, and sales tips. You can also order demo and
//               sample spill kits to showcase the Green Boom products in action
//               for your customers. Not only will you save time by having all of
//               the information in one place, but also elevate performance,
//               resulting in increased productivity and a more personalized and
//               satisfying experience for your valued customers.
//             </Title>
//           </div>
//           <div className="flex flex-row pl-[17%] pb-12 gap-1">
//             <img src={playstore} alt="" />
//             <img src={applestore} alt="" />
//           </div>
//         </div>
//       </div>
//       <Register />
//       <Venders />
//     </>
//   );
// }

// export default Home;

import React from "react";

import DefaultLayout from "../../layout/DefaultLayout";
import mascot from "../../assets/mascot.png";
import applestore from "../../assets/applestore.png";
import playstore from "../../assets/playstore.png";
import Title from "../../Components/Title/Title";
import Register from "../../Components/Register";
import Venders from "../../Components/Venders";

function Home() {
  return (
    <DefaultLayout>
      <div className="relative flex flex-col  md:ml-40 md:flex-row items-start pt-20 mx-auto">
        {/* Image */}
        <img
          src={mascot}
          className="w-64 md:absolute md:left-[-10px] md:top-[130px] mb-8 md:mb-0"
          alt="Mascot"
        />
        {/* Content */}
        <div className="bg-primaryA rounded-xl md:ml-40 md:mr-28 w-full md:w-[80%]">
          <div className="p-4 md:p-12 md:pl-36 md:pr-24">
            <Title fontSize="2xl" weight="bold" color="white" className="pb-7">
              Download the Training Mobile App
            </Title>
            <Title color="white" height="6" weight="semibold" className="pb-0">
              In the app, you can find for example presentations, catalogs,
              flyers, videos, FAQs, and sales tips. You can also order demo and
              sample spill kits to showcase the Green Boom products in action
              for your customers. Not only will you save time by having all of
              the information in one place, but also elevate performance,
              resulting in increased productivity and a more personalized and
              satisfying experience for your valued customers.
            </Title>
          </div>
          <div className="flex flex-row justify-start md:justify-start  md:pl-40 pl-4 pb-12 gap-1">
            <img src={playstore} alt="Google Play Store" />
            <img src={applestore} alt="Apple App Store" />
          </div>
        </div>
      </div>
      <Register />
      <Venders />
    </DefaultLayout>
  );

}

export default Home;
