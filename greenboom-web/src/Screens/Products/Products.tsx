import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import side from "../../assets/new.svg";
import side1 from "../../assets/new1.svg";
import Title from "../../Components/Title/Title";
import { PRODUCTS_DATA } from "../../constants";
import DefaultLayout from "../../layout/DefaultLayout";
import useProducts from "./useProducts";
import routes from "../../network/routes";
import apiService from "../../network/apiServices";

function Products() {
  const [loading, setLoading] = useState(false);
  const getAllProducts = () => {
    apiService.Get({
      url: routes.products,
      setLoading,
      OnSuccess: (res) => {
        console.log("Product data we got is:");
        console.log("data is:", res.message);
      },
      OnError: (error) => {
        console.log(error);
      },
    });
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
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
                  Green Boom’s products are priced competitively so you don’t
                  have to choose between performance or the environment.
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
                <Title fontSize="md" weight="normal" marginTop="mt-4">
                  {product.name}
                </Title>
              </div>
            ))}
          </div>
          <div className="ml-[19%] mr-[13%] mt-28 flex flex-row">
            <img src={products} width={280} alt="" />
            <div className="ml-[5%] mt-5">
              <Title
                fontSize="5xl"
                weight="bold"
                marginBottom="mb-5"
                marginTop="mt-5"
                letterSpace="widest"
              >
                CUSTOMIZE
              </Title>
              <Title
                fontSize="5xl"
                weight="bold"
                marginBottom="mb-5"
                marginTop="mt-5"
                letterSpace="widest"
              >
                your response
              </Title>
              <Title
                fontSize="xl"
                letterSpace="widest"
                weight="semibold"
                className="text-primaryA"
              >
                CUSTOM SPILL KITS
              </Title>
            </div>
          </div>
        </div>
        <MovingText />

        <WhereToBuy />
        <div>
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
            fontSize="xl"
          >
            We value feedback from our customers and strive to improve our
            products for their applications.
          </Title>
          <Title
            className="text-center "
            letterSpace="wide"
            marginTop="mt-3"
            weight="light"
            fontSize="xl"
          >
            Here’s some mentions that made us blush.
          </Title>
        </div>
        <Testimonials />
      </DefaultLayout>
    </>
  );
}

export default Products;
