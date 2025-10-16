import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" text-[#F3F3F3] px-6 sm:px-20  w-full mb-10">
      <div className="py-10 flex flex-wrap items-center border-y border-[#262626]">
        <div className="w-full md:w-auto">
          <h3 className="text-2xl mr-auto font-bold">PELUMI ONASOGA</h3>
          <p className="text-sm">Software Engineer</p>
        </div>

        <div className="mt-20 md:mt-0 md:ml-auto flex items-center gap-x-4">
          <div className="bg-[#9e9e9e12] rounded-full h-[3.5rem] xs:h-[4rem]  w-[3.5rem] xs:w-[4rem] flex items-center justify-center">
            <Link
              href="https://www.linkedin.com/in/pelumi-onasoga-4767081ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Linkedin size={32} color="#ffffff" />
            </Link>
          </div>
          <div className="bg-[#9e9e9e12] rounded-full h-[3.5rem] xs:h-[4rem]  w-[3.5rem] xs:w-[4rem] flex items-center justify-center">
            <Link
              href="https://github.com/peltastic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Github size={32} color="#ffffff" />
            </Link>
          </div>
          <div className="bg-[#9e9e9e12] rounded-full h-[3.5rem] xs:h-[4rem] w-[3.5rem] xs:w-[4rem] flex items-center justify-center">
            <Link
              href="mailto:onasoga.p@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Mail size={32} color="#ffffff" />
            </Link>
          </div>
          <div className="bg-[#9e9e9e12] rounded-full h-[3.5rem] xs:h-[4rem] w-[3.5rem] xs:w-[4rem] flex items-center justify-center">
            <Link
              href="https://x.com/pelumi_4evr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <Twitter size={32} color="#ffffff" />
            </Link>
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs">© 2025</p>
    </footer>
  );
};

export default Footer;
