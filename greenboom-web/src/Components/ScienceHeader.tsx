import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Title from "./Title/Title";
import header from "../assets/Science/header.png";
import cloud from "../assets/Science/cloud.svg";
import cloud2 from "../assets/Science/cloud2.svg";
import waste1 from "../assets/Science/waste1.png";
import waste2 from "../assets/Science/waste2.png";
import tri from "../assets/Science/tri.png";
import dot1 from "../assets/Science/Dot1.svg";
import dot2 from "../assets/Science/Dot2.svg";
import dot3 from "../assets/Science/Dot3.svg";
import arrow from "../assets/Science/arrow.svg";

const AnimatedText = ({ text }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="flex"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const slideInAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 1.5,
    },
  },
};

const springAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 3,
      mass: 0.5,
    },
  },
};

function ScienceHeader() {
  const cloudAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        duration: 2,
      },
    },
  };
  const fadeInAnimation = {
    // fade in animation
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
      },
    },
  };

  // refs to make the animations only when the content is came into viewport
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true });

  if (inView) {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, duration: 1.5 },
    });
  }

  return (
    <>
      <div className="flex flex-row  ">
        <div className="ml-[0%] w-[50%]">
          <div className="ml-32">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInAnimation}
            >
              <Title
                className="text-primaryA"
                marginTop="mt-48"
                weight="semibold"
                fontSize="md"
              >
                OUR TECHNOLOGIES
              </Title>
            </motion.div>
            <Title
              weight="semibold"
              className="tracking-wider pl-3 "
              marginTop="mt-7"
              marginBottom="mb-5"
              fontSize="4xl"
            >
              <AnimatedText text="A SPOTLIGHT ON" />
            </Title>
            <Title
              weight="semibold"
              fontSize="4xl"
              className="italic pl-3 "
              marginBottom="mb-12"
            >
              <AnimatedText text="SUSTAINABILITY" />
            </Title>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInAnimation}
            >
              <Title weight="light" className="text-left w-[71%]" height="6">
                Green Boom aims to forever change oil-spill cleanup and ensure a
                greener future.
              </Title>
            </motion.div>
          </div>
        </div>
        <div className="mr-[20%] w-[60%]">
          <motion.img
            src={header}
            alt=""
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 2,
            }}
          />
        </div>
      </div>
      <div className="flex ml-[60%] -mt-10">
        <motion.img
          src={cloud}
          width={400}
          alt=""
          initial="hidden"
          animate="visible"
          variants={cloudAnimation}
        />
      </div>
      <div className="flex flex-row">
        <div className="mt-10 ml-[3%] w-[50%]">
          <motion.img
            ref={ref}
            src={cloud2}
            width={400}
            alt=""
            initial={{ x: -200, opacity: 0 }}
            animate={controls}
          />
          <motion.img
            src={waste1}
            className="-mt-[58%] ml-[25%]"
            alt=""
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          />
          <motion.img
            src={waste2}
            className="mt-[25px] ml-[25%]"
            alt=""
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          />
          <motion.img
            src={tri}
            className="-mt-[290px] ml-[77%]"
            alt=""
            initial="hidden"
            animate="visible"
            variants={fadeInAnimation}
          />
        </div>
        <div className="w-[60%] mt-[8%]">
          <Title
            className="text-primaryA"
            weight="semibold"
            letterSpace="wider"
          >
            INDUSTRIAL SORBENTS = INDUSTRIAL WASTE
          </Title>
          <motion.div initial={{ x: -200, opacity: 0 }} animate={controls}>
            <Title
              marginTop="mt-6"
              fontSize="4xl"
              letterSpace="wider"
              weight="semibold"
              height="10"
              className="w-[50%]"
            >
              The other guys are trying to solve one problem just to create
              another.
            </Title>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInAnimation}
          >
            <Title
              height="6"
              weight="light"
              className="w-[66%]"
              marginTop="mt-16"
            >
              The oil spill cleanup industry has been cleaning up its spills
              simply by moving the incident from one location to another. Other
              sorbent brand products on the market are non-biodegradable
              polypropylene-based — single-use plastic which is made using
              traditional manufacturing processes that cause land and water
              pollution.
            </Title>
          </motion.div>
        </div>
      </div>
      <div className="mt-40 ml-[640px] flex flex-row">
        <div>
          <div className="flex flex-row mb-7">
            <img src={dot1} width={12} alt="" />
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={fadeInAnimation}
            >
              <Title className="w-64 pl-4">
                Each competitor's 10 lb. boom is equivalent to 3000 plastic
                straws.
              </Title>
            </motion.div>
          </div>

          <div className="flex flex-row mb-7">
            <img src={dot2} width={12} alt="" />
            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={fadeInAnimation}
            >
              <Title className="w-64 pl-4">
                Even minor oil spills often require multiples of truckloads of
                booms.
              </Title>
            </motion.div>
          </div>

          <div className="flex flex-row pb-24">
            <img src={dot3} width={12} alt="" />
            <motion.div
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={fadeInAnimation}
            >
              <Title className="w-64 pl-4">
                Polypropylene products end up in landfills, never breaking down.
              </Title>
            </motion.div>
          </div>
        </div>
        <div className="-mt-28">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={springAnimation}
            className="ml-16 transform rotate-12 pb-5"
          >
            <img src={arrow} width={100} alt="" />
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={springAnimation}
          >
            <Title
              height="6"
              className="pl-20 w-56 italic text-gray-400"
              weight="semibold"
            >
              The founders of Green Boom never thought that made any sense.
            </Title>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ScienceHeader;
