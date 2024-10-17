import Title from "../Components/Title/Title";
import expert1 from "../assets/Science/expert1.png";
import cloud from "../assets/Science/cloud.svg";
import expert2 from "../assets/Science/expert2.png";
import { Card, Carousel } from "antd";

function ChemicalExperts() {
  const experts = [
    {
      name: "Sudhir Sharma, PhD",
      desc: "Sudhir is the Co-Founder & CEO of Green Boom Corp. After witnessing the devastating effect oil spills have on the environment, he sought a better and greener clean up solution. Sudhir has published multiple peer-reviewed scientific articles with numerous collaborations and has won awards for his research and conference presentations. Sudhir holds an MS and Ph.D. in Chemical Engineering from Georgia Tech. He also earned a B.E. with First Class Honors in Chemical Engineering from the University of Auckland.",
      rank: "CO-FOUNDER & CEO",
      img: expert2,
    },
    {
      name: "Prof. Yulin Deng",
      desc: "Yulin is the Co-Founder & CSO of Green Boom Corp. Yulin has published 275 peer-reviewed papers, one e-book, eight book chapters, and has received four patents. Yulin is an elected Fellow of the International Academy of Wood Science and a professor in the School of Chemical and Biomolecular Engineering at Georgia Tech. He has received several awards, including the AIChE Forest Bioproducts Division Chase Award in 2013 and the Institute of Paper Science and Technology President Research Award in 2020.",
      rank: "CO-FOUNDER & CSO",
      img: expert1,
    },
  ];

  return (
    <div>
      <Title
        className="text-gray-400 italic text-center"
        marginTop="mt-16"
        letterSpace="widest"
      >
        YOU'RE IN GOOD HANDS
      </Title>
      <Title
        className="text-center"
        weight="semibold"
        fontSize="2xl"
        marginTop="mt-5"
        letterSpace="wider"
        marginBottom="mb-10"
      >
        MEET SOME OF OUR CHEMICAL ENGINEERING EXPERTS
      </Title>
      <div className="carousel-container">
        <Carousel
          dots={true}
          dotPosition="bottom"
          arrows={true}
          autoplay={true}
          autoplaySpeed={3000}
          style={{
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          {experts.map((expert, index) => (
            <div key={index}>
              <Card
                bordered={false}
                style={{
                  margin: "0 auto",
                  width: "100%",
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                <div className="flex flex-row gap-5">
                  <div className="w-[45%] flex justify-center items-start">
                    <div className="relative -mt-10">
                      <img
                        src={cloud}
                        alt=""
                        className="pt-28 -ml-6"
                        style={{
                          width: "400px",
                          height: "400px",
                          objectFit: "contain",
                        }}
                      />
                      <img
                        src={expert.img}
                        className="absolute top-20 left-1/2 transform -translate-x-1/2"
                        alt=""
                        style={{
                          width: "300px",
                          height: "300px",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>

                  <div className="w-[55%] text-left">
                    <Title
                      marginTop="mt-1"
                      fontSize="md"
                      className="text-primaryA"
                      weight="semibold"
                      marginBottom="mb-5"
                    >
                      {expert.rank}
                    </Title>
                    <Title marginTop="mt-2" fontSize="2xl" weight="bold">
                      {expert.name}
                    </Title>
                    <Title weight="light" marginTop="mt-5" height="6">
                      {expert.desc}
                    </Title>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ChemicalExperts;
