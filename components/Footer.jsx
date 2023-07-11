import React, { useEffect } from "react";
import Link from "next/link";
import ContactIllustration from "../assets/contactillustration.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import bgDesignsImg from "../assets/design3.svg";
import { AiOutlineTwitter, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <footer id="contact" className="text-white10 mt-24 relative">
      <div className="w-[30rem] -z-[10] absolute -right-[19rem] -top-[15rem] opacity-30">
        <Image src={bgDesignsImg} alt="design" />
      </div>
      <h1 className="text-center text-6xl  mb-20">
        Contact <span className="text-secondary">Me</span>{" "}
      </h1>
      <div className="flex flex-wrap flex-col-reverse sm:flex-row  items-center">
        <div className="w-full xs:w-[90%] sm:w-[40%] mr-auto ">
          <div className="border-b-2 py-8 my-2 border-white10">
            <p className=" text-3xl">
              I am open currently open for projects, freelance and full time
              roles, i will respond to messages with the next 12 hours. Feel
              free to contact Me
            </p>
            <div className="flex items-center text-6xl mt-[2rem]">
              <Link href={"mailto:onosogapelumi@gmail.com"}>
                <a data-aos="fade-left" data-aos-delay="100">
                  <AiFillMail className="mr-6 hover:scale-[1.2] transition-all" />
                </a>
              </Link>
              <Link href={"https://twitter.com/peltastica"}>
                <a data-aos="fade-left" data-aos-delay="200">
                  <AiOutlineTwitter className="mr-6 hover:scale-[1.2] transition-all" />
                </a>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/pelumi-onasoga-4767081ba/"}
              >
                <a data-aos="fade-left" data-aos-delay="200">
                  <AiFillLinkedin className="hover:scale-[1.2] transition-all" />
                </a>
              </Link>
            </div>
          </div>
          <div className="border-t-2 my-2 flex items-center py-8 border-white10">
            <p className="font-madi text-6xl mr-auto">Pelumi</p>
            <p>Made with Next.js and TailwindCSS</p>
          </div>
        </div>
        <div data-aos="zoom-in" className="w-[90%] sm:w-[50%]">
          <Image src={ContactIllustration} alt="contact" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
