import React, { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Title from "../../Components/Title/Title";
import ProductsSpecs from "../../Components/ProductsSpecs";
import GetInfo from "../../Components/GetInfo";

function ProductPage() {
  const [showDetails, setShowDetails] = useState(false);
  const handleReadMore = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <DefaultLayout>
      <div className="bg-secondary min-h-screen">
        {/* Changed h-screen to min-h-screen */}
        <div className="ml-60 mr-60 ">
          <div className="flex flex-row pt-16">
            <Title weight="light" marginTop="">
              Home / PRODUCTS /
              <span className="bg-primaryA font-bold"> product.title</span>
            </Title>
            <div className="flex flex-row ml-auto">
              <Title>Prev</Title>
              <Title className="ml-4">Next</Title>
            </div>
          </div>

          <div className="flex flex-row gap-28 pt-16 pl-20">
            <img src="" className="bg-white h-96 w-96" alt="" />
            <div>
              <Title
                className=""
                fontSize="3xl"
                marginBottom="mb-4"
                weight="bold"
              >
                Product Title
              </Title>
              <Title marginBottom="mb-8" weight="light">
                SKU ID
              </Title>
              <Title>SHORT DESC</Title>
              <button onClick={handleReadMore} className="underline mt-5">
                {showDetails ? "Read Less" : "Read more"}
              </button>
              {showDetails && (
                <div className="mt-4">
                  <Title>Details about the product go here.</Title>
                </div>
              )}
              <Title fontSize="sm" weight="light" marginTop="mt-5">
                Size
              </Title>
              <select
                name=""
                className="border border-gray-400 mt-3 px-28 py-2 hover:bg-gray-200 focus:bg-gray-200"
                id=""
              >
                <option value="" disabled selected>
                  Select
                </option>
                <option value="size1">Size1</option>
                <option value="size2">Size2</option>
                <option value="size3">Size3</option>
              </select>
            </div>
          </div>

          <div className="pb-10">
            <ProductsSpecs />
          </div>
          <div className="pb-32">
            <GetInfo />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default ProductPage;
