import React from "react";
import oily from "../../assets/contact/oily.png";
import Title from "../../Components/Title/Title";
import DefaultLayout from "../../layout/DefaultLayout";
import cloud from "../../assets/contact/cloud.svg";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import FaqSection from "../../Components/Faq/FaqSection";
function Contact() {
  return (
    <DefaultLayout>
      <div className="p-24 bg-secondary  ">
        <div className="flex flex-row  pl-56 pt-6">
          <img src={oily} width={140} alt="" />
          <Title
            marginTop="mt-5"
            fontSize="5xl"
            weight="semibold"
            className="italic pl-10"
          >
            Questions or Comments?
          </Title>
        </div>
        <div className="flex flex-col pl-96 -mt-12">
          <Title weight="semibold" fontSize="lg" className=" pl-6">
            We’d love to hear from you.
          </Title>
          <Title
            weight="light"
            fontSize="lg"
            className=" pl-6"
            marginTop="mt-2"
          >
            Send us a note to get in touch with our team.
          </Title>
        </div>
        <div className="-ml-10 flex flex-row gap-4">
          <img src={cloud} width={180} className="-mt-96" alt="" />
          <div className=" rounded-lg bg-gray-300 pt-6 pl-16  -ml-10 mt-12 w-[30%]">
            <Title weight="semibold" fontSize="2xl">
              Headquarters
            </Title>
            <Title marginTop="mt-4">
              Email: <span className=" underline"> Info@greenboom.com</span>
            </Title>
            <Title marginTop="mt-6">4800 River Green PKWY,</Title>
            <Title marginTop="mt-2" marginBottom="mb-8">
              Duluth 30096, GA
            </Title>
            <Title weight="semibold" fontSize="2xl" marginTop="mt-16">
              European Office
            </Title>
            <Title marginTop="mt-5">
              Email: <span className=" underline"> Info@greenboom.com</span>
            </Title>
            <Title marginTop="mt-2">
              Phone: <span className=" underline"> +31 6 42 56 48 23</span>
            </Title>
            <Title marginTop="mt-7">Herikerbergweg 292-342,</Title>
            <Title marginTop="mt-2">Amsterdam, 1101 CT, Netherlands</Title>
            <Title
              weight="semibold"
              marginTop="mt-10"
              className="text-primaryA"
              fontSize="2xl"
            >
              Follow us
            </Title>
            <div className="flex space-x-4 pt-5 pb-12">
              <a
                href="https://www.linkedin.com/company/green-boom/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.facebook.com/GreenBoomCorp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/greenboomcorp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://twitter.com/GreenBoomCorp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCU5HsYtpVpDZTMlqwipChpQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={22} />
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col">
            <input
              type="text"
              className="p-4 mt-2 pl-8 border-4 border-pink-300  focus:border-2 focus:border-primaryA focus:outline-none w-[230%]  placeholder:text-black placeholder:font-light placeholder:text-xs"
              placeholder="Your Name / Company Name"
            />
            <input
              type="text"
              className="p-4 pl-8 mt-3 border-4 border-pink-300   focus:border-2 focus:border-primaryA focus:outline-none w-[230%]   placeholder:text-black placeholder:font-light placeholder:text-xs"
              placeholder="Email"
            />

            {/* <textarea
              className="p-4 pl-8 mt-3 border-4 focus:border-primaryA border-pink-300 w-[230%] h-40 placeholder:text-black placeholder:font-light placeholder:text-xs resize-none"
              placeholder="Add a message"
            ></textarea> */}
            <textarea
              className="p-4 pl-8 mt-3 border-4 border-pink-300 focus:border-2 focus:border-primaryA focus:outline-none w-[230%] h-40 placeholder:text-black placeholder:font-light placeholder:text-xs resize-none"
              placeholder="Add a message"
            ></textarea>

            <button className="mt-10 rounded-lg p-2    bg-primaryA text-white w-[50%] cursor-pointer hover:bg-gray-400">
              Submit
            </button>
          </div>
        </div>
        <FaqSection />
      </div>
    </DefaultLayout>
  );
}

export default Contact;
