import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Headersvg({ animeDelay }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = animeDelay + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          repeat: Infinity,
        },
      };
    },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView, animeDelay]);
  return (
    <div className="absolute top-4 right-4">
      <motion.svg
        width="527"
        height="1534"
        viewBox="0 0 927 3734"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.path
          d="M717.42 98.2029L866.402 8.03183L1013.09 98.1917V233.15L866.402 321.224L717.42 233.139V98.2029Z"
          stroke="#03FF2B"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M875.555 335.003L1024.54 244.832L1171.22 334.991V469.95L1024.54 558.023L875.555 469.939V335.003Z"
          stroke="#978080"
          stroke-width="5"
          variants={draw}
          custom={2.5}
        />
        <motion.path
          d="M2169.5 333.099L2318.48 242.928L2465.17 333.088V468.046L2318.48 556.12L2169.5 468.035V333.099Z"
          stroke="#978080"
          stroke-width="5"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M2174.5 820.099L2323.48 729.928L2470.17 820.088V955.046L2323.48 1043.12L2174.5 955.035V820.099Z"
          stroke="#978080"
          stroke-width="5"
          variants={draw}
          custom={2.5}
        />
        <motion.path
          d="M2175.5 1307.1L2324.48 1216.93L2471.17 1307.09V1442.05L2324.48 1530.12L2175.5 1442.04V1307.1Z"
          stroke="#978080"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M1037.93 98.2029L1186.91 8.03183L1333.6 98.1917V233.15L1186.91 321.224L1037.93 233.139V98.2029Z"
          stroke="#EBFF02"
          stroke-width="5"
          variants={draw}
          custom={2.5}
        />
        <motion.path
          d="M1037.5 571.099L1186.48 480.928L1333.17 571.088V706.046L1186.48 794.12L1037.5 706.035V571.099Z"
          stroke="#F45C5C"
          stroke-width="5"
          variants={draw}
          custom={2.5}
        />
        <motion.path
          d="M1209.1 332.003L1358.08 241.832L1504.77 331.991V466.95L1358.08 555.023L1209.1 466.939V332.003Z"
          stroke="#D02B2B"
          stroke-width="5"
          variants={draw}
          custom={4.5}
        />
        <motion.path
          d="M1537.5 333.099L1686.48 242.928L1833.17 333.088V468.046L1686.48 556.12L1537.5 468.035V333.099Z"
          stroke="#76256E"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M1372.98 98.2029L1521.97 8.03183L1668.65 98.1917V233.15L1521.97 321.224L1372.98 233.139V98.2029Z"
          stroke="#3200F9"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M555.79 334.003L704.772 243.832L851.458 333.991V468.95L704.772 557.023L555.79 468.939V334.003Z"
          stroke="#9E00FF"
          stroke-width="5"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M1693.49 98.2029L1842.47 8.03183L1989.16 98.1917V233.15L1842.47 321.224L1693.49 233.139V98.2029Z"
          stroke="#A73131"
          stroke-width="5"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M1854.5 333.099L2003.48 242.928L2150.17 333.088V468.046L2003.48 556.12L1854.5 468.035V333.099Z"
          stroke="#00D1FF"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M236.5 333.099L385.482 242.928L532.169 333.088V468.046L385.482 556.12L236.5 468.035V333.099Z"
          stroke="#00D1FF"
          stroke-width="5"
          variants={draw}
          custom={4}
        />
        <motion.path
          d="M394.5 575.099L543.482 484.928L690.169 575.088V710.046L543.482 798.12L394.5 710.035V575.099Z"
          stroke="#82BC05"
          stroke-width="5"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M717.5 571.099L866.482 480.928L1013.17 571.088V706.046L866.482 794.12L717.5 706.035V571.099Z"
          stroke="#116B7E"
          stroke-width="5"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M1693.5 581.099L1842.48 490.928L1989.17 581.088V716.046L1842.48 804.12L1693.5 716.035V581.099Z"
          stroke="#82BC05"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M396.913 98.2029L545.895 8.03183L692.581 98.1917V233.15L545.895 321.224L396.913 233.139V98.2029Z"
          stroke="#A73131"
          stroke-width="5"
          variants={draw}
          custom={3.5}
        />
        <motion.path
          d="M1367.5 572.099L1516.48 481.928L1663.17 572.088V707.046L1516.48 795.12L1367.5 707.035V572.099Z"
          stroke="#3DAED1"
          stroke-width="5"
          variants={draw}
          custom={2.5}
        />
        <motion.path
          d="M2007.5 1067.1L2156.48 976.928L2303.17 1067.09V1202.05L2156.48 1290.12L2007.5 1202.04V1067.1Z"
          stroke="#F45C5C"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M2008.09 98.4148L2157.07 8.24374L2303.76 98.4036V233.362L2157.07 321.436L2008.09 233.351V98.4148Z"
          stroke="#F45C5C"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M1854.5 820.099L2003.48 729.928L2150.17 820.088V955.046L2003.48 1043.12L1854.5 955.035V820.099Z"
          stroke="#82BC05"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M2011.5 581.099L2160.48 490.928L2307.17 581.088V716.046L2160.48 804.12L2011.5 716.035V581.099Z"
          stroke="#116B7E"
          stroke-width="5"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M1687.5 1054.1L1836.48 963.928L1983.17 1054.09V1189.05L1836.48 1277.12L1687.5 1189.04V1054.1Z"
          stroke="#82BC05"
          stroke-width="5"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M1844.5 1307.1L1993.48 1216.93L2140.17 1307.09V1442.05L1993.48 1530.12L1844.5 1442.04V1307.1Z"
          stroke="#3DAED1"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M560.5 817.099L709.482 726.928L856.169 817.088V952.046L709.482 1040.12L560.5 952.035V817.099Z"
          stroke="#03FF2B"
          stroke-width="5"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M81.7185 93.533L230.701 3.36191L377.387 93.5217V228.48L230.701 316.554L81.7185 228.469V93.533Z"
          stroke="#978080"
          stroke-width="5"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M875.5 817.099L1024.48 726.928L1171.17 817.088V952.046L1024.48 1040.12L875.5 952.035V817.099Z"
          stroke="#EBFF02"
          stroke-width="5"
          variants={draw}
          custom={3.5}
        />
        <motion.path
          d="M875.5 1300.1L1024.48 1209.93L1171.17 1300.09V1435.05L1024.48 1523.12L875.5 1435.04V1300.1Z"
          stroke="#F45C5C"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M1043.5 1050.1L1192.48 959.928L1339.17 1050.09V1185.05L1192.48 1273.12L1043.5 1185.04V1050.1Z"
          stroke="#D02B2B"
          stroke-width="5"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M2323.5 581.099L2472.48 490.928L2619.17 581.088V716.046L2472.48 804.12L2323.5 716.035V581.099Z"
          stroke="#D02B2B"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M2325.5 1067.1L2474.48 976.928L2621.17 1067.09V1202.05L2474.48 1290.12L2325.5 1202.04V1067.1Z"
          stroke="#D02B2B"
          stroke-width="5"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M2328.57 98.4148L2477.55 8.24374L2624.24 98.4036V233.362L2477.55 321.436L2328.57 233.351V98.4148Z"
          stroke="#D02B2B"
          stroke-width="5"
          variants={draw}
          custom={3.5}
        />
        <motion.path
          d="M1372.5 1054.1L1521.48 963.928L1668.17 1054.09V1189.05L1521.48 1277.12L1372.5 1189.04V1054.1Z"
          stroke="#76256E"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M712.5 1054.1L861.482 963.928L1008.17 1054.09V1189.05L861.482 1277.12L712.5 1189.04V1054.1Z"
          stroke="#3200F9"
          stroke-width="5"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M1208.5 817.099L1357.48 726.928L1504.17 817.088V952.046L1357.48 1040.12L1208.5 952.035V817.099Z"
          stroke="#3200F9"
          stroke-width="5"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="M391.5 1054.1L540.482 963.928L687.169 1054.09V1189.05L540.482 1277.12L391.5 1189.04V1054.1Z"
          stroke="#9E00FF"
          stroke-width="5"
          variants={draw}
          custom={1.5}
        />
        <motion.path
          d="M1528.5 817.099L1677.48 726.928L1824.17 817.088V952.046L1677.48 1040.12L1528.5 952.035V817.099Z"
          stroke="#A73131"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M76.3994 571.845L225.381 481.673L372.068 571.833V706.792L225.382 794.865L76.3994 706.78V571.845Z"
          stroke="#00D1FF"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M59.5 1050.1L208.482 959.928L355.169 1050.09V1185.05L208.482 1273.12L59.5 1185.04V1050.1Z"
          stroke="#00D1FF"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M223.5 1290.1L372.482 1199.93L519.169 1290.09V1425.05L372.482 1513.12L223.5 1425.04V1290.1Z"
          stroke="#82BC05"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <motion.path
          d="M555.5 1300.1L704.482 1209.93L851.169 1300.09V1435.05L704.482 1523.12L555.5 1435.04V1300.1Z"
          stroke="#116B7E"
          stroke-width="5"
          variants={draw}
          custom={3.5}
        />
        <motion.path
          d="M1528.5 1302.1L1677.48 1211.93L1824.17 1302.09V1437.05L1677.48 1525.12L1528.5 1437.04V1302.1Z"
          stroke="#82BC05"
          stroke-width="5"
          variants={draw}
          custom={2.5}
        />
        <motion.path
          d="M236.5 817.099L385.482 726.928L532.169 817.088V952.046L385.482 1040.12L236.5 952.035V817.099Z"
          stroke="#A73131"
          stroke-width="5"
          variants={draw}
          custom={2}
        />
        <motion.path
          d="M1196.5 1302.1L1345.48 1211.93L1492.17 1302.09V1437.05L1345.48 1525.12L1196.5 1437.04V1302.1Z"
          stroke="#3DAED1"
          stroke-width="5"
          variants={draw}
          custom={1}
        />
        <rect width="92" height="1528" fill="url(#paint0_linear_91_3)" />
      </motion.svg>
    </div>
  );
}

{
  /* <defs>
  <linearGradient
    id="paint0_linear_83_43"
    x1="2.23511e-05"
    y1="747.309"
    x2="922.575"
    y2="725.937"
    gradientUnits="userSpaceOnUse"
  >
    <stop offset="0.0359711" />
    <stop offset="0.651042" stop-opacity="0.25" />
    <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
  </linearGradient>
</defs> */
}
export default Headersvg;
