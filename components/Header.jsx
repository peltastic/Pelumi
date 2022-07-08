import { useContext, useRef, useEffect, useState } from "react";
import Image from "next/image";
import Headersvg from "./headeSvg";
import HeadersvgMobile from "./headerSvgMobile";
import { motion, useAnimation } from "framer-motion";

const Header = () => {
  const [headerDelay, setHeaderDelay] = useState(5);
  const control = useAnimation();
  const headVariant = (delay) => {
    return {
      hidden: { opacity: 0, y: 40 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeOut", delay: delay },
      },
    };
  };
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 0.4 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 4, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          repeat: Infinity,
        },
      };
    },
  };
  const transitionVariant = (side) => {
    return {
      start: { x: 0 },
      animate: { x: side, zIndex: 0, transition: { delay: 5 } },
    };
  };

  useEffect(() => {
    control.start("visible");
  }, []);
  return (
    <>
      <motion.div
        animate={{ display: "none" }}
        transition={{ delay: 5.5 }}
        className="w-full bg  fixed top-0 z-[1000] h-screen flex "
      >
        <motion.div
          animate={{ display: "none" }}
          transition={{ delay: 5 }}
          className="absolute bg z-[100000] top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
        >
          <motion.p
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            className="text-[#fff]  opacity-0 text-[5rem] absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]"
          >
            P
          </motion.p>
          <motion.svg
            width="201"
            height="150"
            viewBox="0 0 301 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setHeaderDelay(0.2)}
          >
            <motion.path
              d="M2.5 93.0994L151.482 2.92831L298.169 93.0881V228.046L151.482 316.12L2.5 228.035V93.0994Z"
              stroke="#fff"
              strokeWidth="5"
              variants={draw}
              custom={1.5}
            />
          </motion.svg>
        </motion.div>
        <motion.div
          variants={transitionVariant("-120%")}
          animate="animate"
          className="bg-[#8f2a2a] fixed top-0 left-0 h-full translate-x-[20px]  w-[60%] z-[1000]"
        ></motion.div>
        <motion.div
          variants={transitionVariant("120%")}
          animate="animate"
          className="bg-[#8f2a2a] fixed top-0 right-0 h-full w-[60%] z-[1000]"
        ></motion.div>
      </motion.div>
      <header
        id="home"
        className="flex mx-auto max-h-[1200px] border-b  overflow-hidden w-full h-[100vh] px-10 py-24 relative"
      >
        <div className="absolute top-[3rem] sm:-right-[40rem] svg2:-right-[25rem] lg:-right-[10rem] svg:right-4 w-[50%] hidden sm:block">
          <Headersvg animeDelay={headerDelay} />
        </div>
        <div className="absolute top-[60vh] xs:top-[13rem] -right-[1rem] xs:-right-[35rem]   block sm:hidden">
          <HeadersvgMobile animeDelay={headerDelay} />
        </div>
        <div className="  xs:ml-7 absolute xs:relative top-[30rem] xs:top-0 px-[1rem] xs:px-0 sm:ml-[5rem] my-auto w-full xs:w-[50%]">
          <motion.h2
            variants={headVariant(5.2)}
            initial="hidden"
            animate={control}
            className="  text-[3rem] sm:text-[1.7rem] lg:text-[3rem] text-[#fff]"
          >
            <span className="text-primary-dark font-secondary text-[3.2rem] sm:text-[1.9rem] lg:text-[3.2rem]">
              Hi
            </span>
            , I'm Pelumi
          </motion.h2>
          <motion.h1
            variants={headVariant(5.7)}
            initial="hidden"
            animate={control}
            className="font-secondary text-[5rem] sm:text-[3rem] lg:text-[6rem] text-[#fff]"
          >
            FRONTEND ENGINEER{" "}
            <span className="text-grey-header font-primary text-[2rem] sm:text-[1.5rem] lg:text-[2rem]">
              and
            </span>
          </motion.h1>
          <motion.h1
            variants={headVariant(6.2)}
            initial="hidden"
            animate={control}
            className="font-secondary text-[5rem] sm:text-[3rem] lg:text-[6rem] text-[#fff] "
          >
            WEB <span className="text-primary-dark">DEVELOPER</span>{" "}
          </motion.h1>
        </div>
        {/* <div className="my-auto w-[40%] h-full relative"> */}
        {/* <div className="h-screen absolute top-0 right-0">
          <Image src={BackgroundImg} />
        </div> */}
        <div className="w-full h-[20px] bg-gradient-to-t from-[#000000] to-[#00000021] absolute bottom-0 left-0"></div>
      </header>
    </>
  );
};

export default Header;
