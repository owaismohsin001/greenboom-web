import React from "react";
import { Typography } from "antd";
const { Text } = Typography;
import line from "../../assets/Line.svg";
const NewsTicker = () => {
  return (
    <div className=" bg-secondary overflow-hidden whitespace-nowrap ml-[13%] mr-[13%]">
      <Text className=" mt-16 mb-16 inline-block animate-marquee text-6xl font-extrabold">
        You shouldn’t have to pay a premium to be environmentally responsible.
      </Text>
      <img src={line} width={1500} height={15} alt="" />
    </div>
  );
};

export default NewsTicker;
