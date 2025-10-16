import React from "react";
import Navbar from "./layouts/navbar";
import Header from "./header";
import Image from "next/image";
import PatternBg from "../../public/images/Group 36.svg";

type Props = {};

const HeaderSection = (props: Props) => {
  return (
    <div className="">
  
      <Navbar />
      <Header />
    </div>
  );
};

export default HeaderSection;
