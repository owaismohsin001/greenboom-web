import { Collapse } from "antd";
import Title from "../../Components/Title/Title";
import { SearchOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import ContactPageSharing from "../ContactPageSharing";
import q2 from "../../assets/contact/q2.png";
const { Panel } = Collapse;

const FAQ = () => {
  const navigate = useNavigate();
  const handleRead = () => {
    navigate("/about");
  };
  const handleMore = () => {
    navigate("/news");
  };

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
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          paddingRight: "16px",
        }}
      >
        <Collapse
          accordion
          expandIconPosition="right"
          className="bg-white"
          bordered={false}
        >
          <Panel
            header="What is Green Boom?"
            className="pb-5 text-xl font-light"
            key="1"
          >
            <Title weight="light" className="p-5" height="5" fontSize="lg">
              Green Boom is the only 100% biodegradable line of oil-only
              absorbents. Available in pillows, socks, booms, mats and loose
              forms it is designed for large spill response, industrial and
              transportation MRO and safety spill kits.
            </Title>
            <div className="flex justify-center">
              <button
                onClick={handleRead}
                className="bg-primary mt-2 py-3 px-3 text-sm text-white"
              >
                Read more
              </button>
            </div>
            <Title weight="light" marginTop="mt-4">
              Watch a video about us:
            </Title>
            <div className="pl-72 pt-8">
              <iframe
                width="327"
                height="185"
                src="https://www.youtube.com/embed/IncVIEyB28g?si=3qoe8EfiVgCmmb0l"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <ContactPageSharing />
          </Panel>
          <Panel
            header="What is the difference between biodegradable and polypropylene absorbents?"
            key="2"
            className="pb-5 pt-3 text-xl font-light"
          >
            <Title weight="light" className="p-5" height="5" fontSize="lg">
              There are many differences between Green Boom and traditional
              polypropylene absorbents. Below you find some of them.
            </Title>
            <img src={q2} className="pl-7" alt="" />
            <div className="flex justify-center ">
              <button
                onClick={handleMore}
                className="bg-primary mt-6 py-3 px-3 text-sm text-white"
              >
                More information
              </button>
            </div>
            <ContactPageSharing />
          </Panel>
          <Panel
            header="What certifications does Green Boom have?"
            className="pb-5 pt-3 text-xl  font-light"
            key="3"
          >
            <Title weight="light" className="p-5" height="5" fontSize="lg">
              Green Boom has earned certifications from the USDA, EPA, TUV and
              the Nigerian Government.
            </Title>
            <Title weight="light" className="p-5 pt-1" height="5" fontSize="lg">
              We have received certification from the USDA in the U.S. and TUV
              in Europe confirming our all-natural composition. These
              certifications help develop and expand biobased product markets
              and support the farms in our communities where we make our
              products. We have also received technical approvals, like EPA and
              NOSDRA, allowing the use of our sorbents in the critical
              application of oil spill cleanup. Contact us if there are
              certifications needed in your market.
            </Title>

            <Title weight="light" className="p-5 pt-1" height="5" fontSize="lg">
              Read more about our USDA certification:{" "}
              <a
                href="https://www.greenboom.com/post/green-boom-corp-earns-usda-certified-biobased-product-label"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-400 hover:text-gray-400 underline"
              >
                https://www.greenboom.com/post/green-boom-corp-earns-usda-certified-biobased-product-label
              </a>
            </Title>
            <Title weight="light" className="p-5 pt-1" height="5" fontSize="lg">
              Read more about our TUV certification:
              <a
                href="https://www.greenboom.com/post/green-boom-receives-tuv-certification-in-germany-to-clean-up-oil-spills-eliminate-landfill-plastic "
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-400 hover:text-gray-400 underline"
              >
                https://www.greenboom.com/post/green-boom-receives-tuv-certification-in-germany-to-clean-up-oil-spills-eliminate-landfill-plastic
              </a>
            </Title>
            <Title weight="light" className="p-5 pt-1" height="5" fontSize="lg">
              Read more about our NOSDRA and DPR product registration:
              <a
                href="https://www.greenboom.com/post/green-boom-receives-nigerian-nosdra-dpr-product-registration-permits-to-clean-up-oil-spills  "
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-400 hover:text-gray-400 underline"
              >
                https://www.greenboom.com/post/green-boom-receives-nigerian-nosdra-dpr-product-registration-permits-to-clean-up-oil-spills
              </a>
            </Title>
            <ContactPageSharing />
          </Panel>

          <Panel
            header="What is BioPreferred?"
            className="pb-5 pt-3 text-xl  font-light"
            key="4"
          >
            <Title weight="light" className="p-5" height="5" fontSize="lg">
              Green Boom is proud to have earned the USDA Certified Biobased
              Product Certification for all of its hydrophobic, rapid,
              completely biodegradable, oil-only absorbents. The BioPreferred
              Program is a USDA-led initiative that helps develop and expand the
              biobased product market with a goal to increase the purchase and
              use of biobased products.
            </Title>
            <Title weight="light" className="p-5 pt-2" height="5" fontSize="lg">
              In addition, the program includes a mandatory purchasing
              requirements for federal agencies and their contractors and a
              voluntary labeling initiative for biobased products.
            </Title>
            <Title weight="light" className="p-5 pt-2" height="5" fontSize="lg">
              The program improves the industry through mandatory purchasing
              requirements for Federal Agencies and Federal contractors along
              with voluntary product certification and labeling. Having earned
              this distinction, Green Boom’s absorbents are now able to proudly
              display the USDA Certified Biobased Product label on all
              packaging. The label spotlights the biobased content as a
              percentage on each product, which is based on the ratio of a
              product’s non-fossil organic carbon (new organic carbon) to total
              organic carbon.
            </Title>
            <Title weight="light" className="p-5 pt-2" height="5" fontSize="lg">
              The BioPreferred Program encourages economic development, creates
              new jobs and provides new markets for farm materials. The enhanced
              development, purchase and use of biobased products reduces our
              nation's reliance on petroleum, increases the use of renewable
              agricultural resources and helps reduce adverse environmental and
              health impacts.
            </Title>
            <Title weight="light" className="p-5 pt-2" height="5" fontSize="lg">
              <span className="font-bold">
                To learn more about the USDA Certified Biobased Products:{" "}
              </span>
              please visit <span> </span>
              <a
                href="www.biopreferred.gov/BioPreferred"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-gray-400 hover:text-gray-400 underline"
              >
                www.biopreferred.gov/BioPreferred
              </a>
            </Title>
            <ContactPageSharing />
          </Panel>
          <Panel
            header="How does Green Boom loose Sorbent compare to peat moss?"
            className="pb-5 pt-3 text-xl  font-light"
            key="5"
          >
            <Title weight="light" className="p-5" height="5" fontSize="lg">
              The capacity and weights are generally in line between products.
              The main difference is source of the materials.
            </Title>
            <Title weight="light" className="p-5 pt-2" height="5" fontSize="lg">
              Peat moss is the dark brown fibrous product of sphagnum moss and
              other organic materials that decompose in peat bogs over thousands
              of years. It is therefore considered unrenewable and the process
              of recovering it is similar to mining, a carbon intensive and
              destructive process.
            </Title>

            <Title weight="light" className="p-5 pt-2" height="5" fontSize="lg">
              Our materials are agricultural by-products collected from farmers
              throughout the year as the unusable leftovers from harvesting
              crops. It is renewable and non-destructive.
            </Title>
            <ContactPageSharing />
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default FAQ;
