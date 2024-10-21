import { Collapse } from "antd";
import Title from "../../Components/Title/Title";
import { SearchOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

const FAQ = () => {
  return (
    <div
      className="bg-white"
      style={{ width: "1000px", margin: "0 auto", paddingTop: "20px" }}
    >
      <div className="flex flex-row justify-between items-center pb-16">
        <div className="flex-grow text-center">
          <Title
            className="text-primaryA italic"
            marginTop="mt-6"
            fontSize="lg"
            weight="semibold"
          >
            Frequently asked questions
          </Title>
        </div>
        <SearchOutlined className="mt-7 pr-8" />
      </div>
      <Collapse accordion expandIconPosition="right" bordered={false}>
        <Panel header="What is Green Boom?" className="pb-5" key="1">
          <p>
            Green Boom is a company that creates sustainable, biodegradable
            absorbents for oil spills.
          </p>
        </Panel>
        {/* <hr className="border-t border-black my-2" /> */}
        <Panel
          header="What is the difference between biodegradable and polypropylene absorbents?"
          key="2"
        >
          <p>
            Biodegradable absorbents break down naturally, while polypropylene
            absorbents are made from plastic that does not decompose as easily.
          </p>
        </Panel>
        <Panel header="What certifications does Green Boom have?" key="3">
          <p>
            Green Boom is certified by multiple environmental organizations,
            including BioPreferred and others.
          </p>
        </Panel>
        <Panel header="What is BioPreferred?" key="4">
          <p>
            BioPreferred is a certification program for products made from
            renewable resources.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQ;
