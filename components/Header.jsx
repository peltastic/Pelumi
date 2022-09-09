import React from "react";
import Button from "./Button";
import { GithubIcon, HashNodeIcon, LinkedInIcon } from "./Icons";
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import HeroIllustration from "../assets/heroillustration.svg";
import Bullets from "../assets/bullets.svg";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <header
      id="home"
      className="md2:h-[80vh] items-center flex flex-wrap text-[#F1F1F1]"
    >
      <div className="w-full sm1:w-[90%] sm:w-[70%] md2:w-[50%] mr-auto xl:w-[40%] mb-16 md2:mb-0 mx-auto md2:mx-0  mt-16 md2:mt-0">
        <h3 className="text-2xl">Hi!</h3>
        <h1 className="text-[3rem] sm1:text-[4rem] n:text-[5rem]  mb-4 sm1:mb-0">
          I'm <span className="text-secondary ">Pelumi.</span>
        </h1>
        <h1 className=" text-[3rem] sm1:text-[4rem] n:text-[5rem] leading-9 mb-10">
          a Frontend Engineer
        </h1>
        <div className=" ml-2 md:ml-[10rem] mb-[3rem]">
          <svg
            viewBox="0 0 324 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M191.589 7.17545C118.307 7.17545 41.4668 14.1131 6.38388 18.2259C2.99201 18.6235 0 15.9817 0 12.5666C0 9.54554 2.34036 7.05539 5.35757 6.90294C39.9357 5.15576 111.001 1.77231 157.562 0.277794C205.757 -1.26919 285.905 4.01447 321.977 7.00619C323.139 7.10256 324 8.07177 324 9.23783C324 10.5259 322.92 11.5504 321.635 11.4645C304.579 10.3251 284.902 7.17545 191.589 7.17545Z"
              fill="#EEBF63"
            />
          </svg>
        </div>

        <p className="text-xl">
          I implement user friendly, fast and responsive frontend applications
        </p>
        <div className="flex items-center text-xl my-12">
          <p className="mr-11">Connect With Me</p>
          <Link href="https://github.com/peltastic">
            <a>
              <GithubIcon className="w-[3rem] h-[3rem] mr-6" />
            </a>
          </Link>
          <Link href={"https://www.linkedin.com/in/pelumi-onasoga-4767081ba/"}>
            <a>
              <LinkedInIcon className="w-[3rem] h-[3rem] mr-6" />
            </a>
          </Link>
          <Link href="https://hashnode.com/@peltastic">
            <a>
              <HashNodeIcon className="w-[3rem] h-[3rem]" />
            </a>
          </Link>
        </div>
        <div className="flex items-center  ">
          <Link href={"mailto:onasogapelumi@gmail.com"}>
            <a target={"_blank"}>
              <Button
                type="bg"
                className="flex text-lg items-center px-[2rem] py-2 rounded-lg mr-9 "
              >
                <AiOutlineMail className="mr-3" />
                <p>Mail Me</p>
              </Button>
            </a>
          </Link>
          <Link
            href={
              "https://drive.google.com/file/d/1NxXpHe2mnfo0wUgM75i4zfE81U9oPKtQ/view?usp=sharing"
            }
          >
            <a target={"_blank"}>
              <Button className="flex text-lg items-center py-2 rounded-lg px-[2rem]">
                <AiOutlineDownload className="mr-3" />
                <p>Download CV</p>
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="mx-auto md2:mx-0 w-[90%] sm:w-[70%] md2:w-[50%] xl:w-[60%] relative">
        <div className="mx-auto sm1:w-auto relative z-10">
          <Image src={HeroIllustration} alt="hero" />
        </div>
        <div className=" w-[20rem] sm1:w-auto absolute top-[2rem] n:top-[5rem] right-[2rem] n:right-[5rem]">
          <Image src={Bullets} alt="bullets" />
        </div>
      </div>
    </header>
  );
}

export default Header;
