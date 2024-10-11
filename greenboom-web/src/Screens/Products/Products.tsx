// import React from "react";
// import side from "../../assets/new.svg";
// import side1 from "../../assets/new1.svg";
// import Title from "../../Components/Title/Title";

// function Products() {
//   return (
//     <>
//       <div className="bg-bg">
//         <div className="bg-white flex justify-center items-center mt-10 relative">
//           <img src={side1} width={700} height={350} alt="" className="z-10" />

//           <img
//             src={side}
//             width={200}
//             alt=""
//             className="absolute left-1/4 transform -translate-x-1/2 z-20"
//           />
//           <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-30">
//             <Title
//               className="text-primaryA"
//               weight="semibold"
//               marginBottom="mb-9"
//               marginTop="mt-10"
//             >
//               NO MATTER THE SIZE OF THE SPILL
//             </Title>
//             <Title
//               className="text-black"
//               fontSize="3xl"
//               weight="extrabold"
//               marginBottom="mb-5"
//             >
//               GREEN BOOM
//             </Title>
//             <Title
//               className="text-black"
//               fontSize="3xl"
//               weight="extrabold"
//               marginBottom="mb-5"
//             >
//               HAS YOU COVERED
//             </Title>

//             <div className="w-[60%] mx-auto text-center">
//               <Title
//                 className="text-black leading-relaxed"
//                 fontSize="sm"
//                 weight="normal"
//               >
//                 Green Boom’s products are priced competitively so you don’t have
//                 to choose between performance or the environment.
//               </Title>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Products;

import React from "react";
import side from "../../assets/new.svg";
import side1 from "../../assets/new1.svg";
import Title from "../../Components/Title/Title";
import { PRODUCTS_DATA } from "../../constants"; // Importing the products data
import DefaultLayout from "../../layout/DefaultLayout";

function Products() {
  return (
    <DefaultLayout>
      <div className="bg-secondary">
        <div className="bg-white flex justify-center items-center mt-10 relative">
          <img src={side1} width={700} height={350} alt="" className="z-10" />
          <img
            src={side}
            width={200}
            alt=""
            className="absolute left-1/4 transform -translate-x-1/2 z-20"
          />
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-30">
            <Title
              className="text-primaryA"
              weight="semibold"
              marginBottom="mb-9"
              marginTop="mt-10"
            >
              NO MATTER THE SIZE OF THE SPILL
            </Title>
            <Title
              className="text-black"
              fontSize="3xl"
              weight="extrabold"
              marginBottom="mb-5"
            >
              GREEN BOOM
            </Title>
            <Title
              className="text-black"
              fontSize="3xl"
              weight="extrabold"
              marginBottom="mb-5"
            >
              HAS YOU COVERED
            </Title>

            <div className="w-[60%] mx-auto text-center ">
              <Title
                className="text-black leading-relaxed"
                fontSize="sm"
                weight="normal"
              >
                Green Boom’s products are priced competitively so you don’t have
                to choose between performance or the environment.
              </Title>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 mt-36 ml-[13%] mr-[13%]">
          {PRODUCTS_DATA.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-72 h-72 mx-auto"
              />
              {/* <h3 className="mt-4 text-lg font-semibold">{product.name}</h3> */}
              <Title fontSize="md" weight="normal" marginTop="mt-4">
                {product.name}
              </Title>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Products;
