import React, { useState } from "react";
import Title from "../../Components/Title/Title";
import arrow from "../../assets/arrow.svg";
import play from "../../assets/play.svg";
import DefaultLayout from "../../layout/DefaultLayout";
import CustomModal from "../../Components/CustomModal"; // Import your custom modal

function Instructions() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const redirectChannel = () => {
    const path: string = `https://www.youtube.com/@GreenBoomCorp`;
    window.open(path, "_blank");
  };

  return (
    <DefaultLayout>
      <div className="text-center">
        <Title
          fontSize="4xl"
          color="primaryA"
          weight="bold"
          marginTop="mt-16"
          marginBottom="mb-2"
        >
          Usage instructions for
        </Title>
        <Title
          fontSize="4xl"
          color="primaryA"
          weight="bold"
          marginBottom="mb-5"
        >
          rapid spill response
        </Title>

        <div className="flex justify-center items-center h-screen mb-16">
          <iframe
            width="870"
            height="530"
            src="https://www.youtube.com/embed/naTdhULnqPo?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-row">
          <div
            style={{ cursor: "pointer" }}
            className="pl-10 pb-10 relative"
            onClick={toggleDropdown}
          >
            <span
              style={{
                display: "block",
                width: "3px",
                height: "3px",
                backgroundColor: "#000",
                borderRadius: "50%",
                marginBottom: "4px",
              }}
            />
            <span
              style={{
                display: "block",
                width: "3px",
                height: "3px",
                backgroundColor: "#000",
                borderRadius: "50%",
                marginBottom: "4px",
              }}
            />
            <span
              style={{
                display: "block",
                width: "3px",
                height: "3px",
                backgroundColor: "#000",
                borderRadius: "50%",
              }}
            />
          </div>
          <Title className="text-black pl-6" fontSize="lg">
            All Videos
          </Title>

          {dropdownVisible && (
            <div className="mt-5 mb-2 border border-black bg-white shadow-lg rounded-md transform -translate-x-28">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={showModal}
                >
                  Share
                </li>
              </ul>
            </div>
          )}
        </div>

        <CustomModal visible={isModalVisible} onClose={handleCancel}>
          <h1>This is a transparent full-screen modal!</h1>
        </CustomModal>

        <div className="w-full h-44 bg-primaryA">
          <h1>youtube videos here from backend</h1>
        </div>

        <div className="ml-[15%] mt-24 mb-24">
          <img src={arrow} alt="" className="ml-7" />
          <button
            onClick={redirectChannel}
            className="ml-[20%] flex items-center bg-primaryA rounded-3xl p-2 text-white text-xl px-5 tracking-widest"
          >
            Find more videos on our YouTube Channel
            <img src={play} width={35} alt="Play icon" className="ml-2" />
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Instructions;
