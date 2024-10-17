import banner from "../assets/Science/banner.svg";
import certification from "../assets/Science/certification.svg";
import Title from "./Title/Title";
import certify1 from "../assets/Science/certify1.png";
import certify2 from "../assets/Science/certify2.png";
import impact1 from "../assets/Science/impact1.svg";
import impact2 from "../assets/Science/impact2.svg";
import impact3 from "../assets/Science/impact3.svg";
function CertifiedSciencePage() {
  return (
    <>
      <div
        className="w-auto h-96 bg-center "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "120%",
          backgroundPosition: "100% center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row">
          <div className=" h-full w-[40%]">
            <Title
              className="text-gray-400 italic pl-64 pt-32"
              fontSize="lg"
              weight="semibold"
            >
              CERTIFIED LEGIT!
            </Title>
            <img
              src={certification}
              width={250}
              alt=""
              className="pt-10 ml-56"
            />
          </div>
          <div className="pt-40 pl-32 w-[80%]">
            <Title weight="bold" fontSize="4xl" letterSpace="widest">
              Tested and approved:
            </Title>
            <Title
              height="8"
              fontSize="2xl"
              weight="semibold"
              className="w-[60%]"
            >
              Green Boom has earned certifications from the USDA, EPA, TUV and
              Nigerian Governments.
            </Title>
          </div>
        </div>
      </div>
      <div className="flex flex-row  ml-40 mr-44">
        <div className="w-[50%]">
          <img src={certify1} alt="" />
          <img src={certify2} alt="" className="pl-48 -mt-16" />
        </div>
        <div className="w-[50%] -ml-20">
          <Title weight="light" height="5" marginTop="mt-6">
            We have received certification from the USDA in the U.S. and TUV in
            Europe confirming our all-natural composition. These certifications
            help develop and expand biobased product markets and support the
            farms in our communities where we make our products.
          </Title>
          <Title weight="light" height="5" marginTop="mt-6">
            We have also received technical approvals, like EPA and NOSDRA,
            allowing the use of our sorbents in the critical application of oil
            spill cleanup. Contact us if there are certifications needed in your
            market.
          </Title>
        </div>
      </div>
      <div className="mt-36">
        <Title className="text-gray-400 text-center italic" weight="semibold">
          MAKE AN IMPACT
        </Title>
        <Title className="text-center pt-6" fontSize="2xl" weight="semibold">
          CHOOSING GREEN MAKES A BIG DIFFERENCE
        </Title>
        <div className="grid grid-cols-3 ml-48 mr-48 gap-12 mt-20 justify-center items-center">
          <div className="flex flex-col items-center w-[80%]">
            <img src={impact1} alt="" width={150} />
            <Title
              className="text-primaryA text-center mt-1"
              height="6"
              weight="semibold"
            >
              Help decrease the world’s reliance on single-use plastics
            </Title>
          </div>
          <div className="flex flex-col items-center w-[80%]">
            <img src={impact2} alt="" width={180} />
            <Title
              className="text-primaryA text-center mt-3"
              weight="semibold"
              height="6"
            >
              Help increase the use of renewable agricultural resources.
            </Title>
          </div>
          <div className="flex flex-col items-center w-[80%]">
            <img src={impact3} alt="" width={100} />
            <Title
              className="text-primaryA w-40 text-center -mt-5"
              weight="semibold"
              height="6"
            >
              Help reduce adverse environmental and health impacts.
            </Title>
          </div>
        </div>
      </div>
    </>
  );
}

export default CertifiedSciencePage;
