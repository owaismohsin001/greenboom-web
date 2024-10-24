import React from "react";
import Title from "./Title/Title";

function GetInfo() {
  return (
    <div className="ml-28 mr-28  border border-gray-300">
      <div className="bg-white">
        <Title
          className="pt-10 pb-8 text-primaryA italic text-center"
          fontSize="3xl"
          weight="medium"
        >
          Get more information
        </Title>

        {/* Row 1 */}
        <div className="flex flex-row gap-12 px-10 pb-3">
          <div className="flex flex-col">
            <label className="flex items-center mb-1">
              <Title fontSize="md" weight="medium">
                First Name
              </Title>
              <span className="text-gray-400 ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="eg., Emily"
              className="px-5 w-64 py-3 border-2 rounded text-sm focus:outline-none focus:border-red-400 hover:border-red-300 border-gray-300 placeholder:font-light"
            />
          </div>
          <div className="flex flex-col">
            <label className="flex items-center mb-1">
              <Title fontSize="md" weight="medium">
                Last Name
              </Title>
              <span className="text-gray-400 ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="eg., Smith"
              className="px-5 w-64 py-3 border-2 rounded text-sm focus:outline-none focus:border-red-400 hover:border-red-300 border-gray-300 placeholder:font-light"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-row gap-12 px-10 pt-1 pb-3">
          <div className="flex flex-col">
            <label className="flex items-center mb-1">
              <Title fontSize="md" weight="medium">
                Email
              </Title>
              <span className="text-gray-400 ml-1">*</span>
            </label>
            <input
              type="email"
              placeholder="eg., email@example.com"
              className="px-5 w-64 py-3 border-2 rounded text-sm focus:outline-none focus:border-red-400 hover:border-red-300 border-gray-300 placeholder:font-light"
            />
          </div>
          <div className="flex flex-col">
            <label className="flex items-center mb-1">
              <Title fontSize="md" weight="medium" className="p-1">
                Phone
              </Title>
              {/* <span className="text-gray-400 ml-1">*</span> */}
            </label>
            <input
              type="text"
              placeholder="eg., +34 555-555-555"
              className="px-5 w-64 py-3 border-2 rounded text-sm focus:outline-none focus:border-red-400 hover:border-red-300 border-gray-300 placeholder:font-light"
            />
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex flex-row gap-12 px-10 pt-1 pb-3">
          <div className="flex flex-col">
            <label className="flex items-center mb-1">
              <Title fontSize="md" weight="medium">
                Company Name
              </Title>
              <span className="text-gray-400 ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="eg., email@example.com"
              className="px-5 w-64 py-3 border-2 rounded text-sm focus:outline-none focus:border-red-400 hover:border-red-300 border-gray-300 placeholder:font-light"
            />
          </div>
          <div className="flex flex-col">
            <label className="flex items-center mb-1">
              <Title fontSize="md" weight="medium" className="p-1">
                Product(s) of Interest
              </Title>
              <span className="text-gray-400 ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="eg., Pillows"
              className="px-5 w-64 py-3 border-2 rounded text-sm focus:outline-none focus:border-red-400 hover:border-red-300 border-gray-300 placeholder:font-light"
            />
          </div>
        </div>
        {/* Row 4 */}
        <div className="flex flex-row gap-12 px-10 pt-1 pb-3">
          <div className="flex flex-col w-full">
            <label className="flex items-center mb-1">
              <Title fontSize="md" weight="medium" className="p-1">
                Give us more details
              </Title>
              <span className="text-gray-400 ml-1">*</span>
            </label>
            <textarea
              className="px-5 w-full py-3 border-2 rounded text-sm focus:outline-none focus:border-red-400 hover:border-red-300 border-gray-300 placeholder:font-light"
              rows="4" // Number of visible rows
              placeholder="Please provide more details here..."
            ></textarea>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="text-white italic tracking-widest border-4 border-sky bg-sky py-2 px-4  hover:border-black hover:bg-gray-600 font-bold mt-8 mb-16 rounded">
            Request information
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInfo;
