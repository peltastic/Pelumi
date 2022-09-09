import Link from "next/link";
import ContactIllustration from "../assets/contactillustration.svg";
import Image from "next/image";
import { AiOutlineTwitter, AiFillMail, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const footerLinks = [
    { href: "", content: "Email Me" },
    {
      href: "https://linkedin.com/in/pelumi-onasoga-4767081ba/",
      content: "LinkedIn",
    },
    { href: "https://twitter.com/peltastica", content: "Twitter" },
    { href: "https://github.com/peltastic", content: "Github" },
  ];
  return (
    <footer id="contact" className="text-white10 mt-24">
      <h1 className="text-center text-6xl ">
        Contact <span className="text-secondary">Me</span>{" "}
      </h1>
      <div className="flex flex-wrap flex-col-reverse sm:flex-row  items-center">
        <div className="w-full xs:w-[90%] sm:w-[40%] mr-auto ">
          <div className="border-b-2 py-8 my-2 border-white10">
            <p className=" text-lg">
              I am open currently open for projects, freelance and full time
              roles, i will respond to messages with the next 12 hours. Feel
              free to contact Me
            </p>
            <div className="flex items-center text-6xl mt-[2rem]">
              <Link href={"mailto:onosogapelumi@gmail.com"}>
                <a>
                  <AiFillMail className="mr-6" />
                </a>
              </Link>
              <Link href={"https://twitter.com/peltastica"}>
                <a>
                  <AiOutlineTwitter className="mr-6" />
                </a>
              </Link>
              <Link href={"https://www.linkedin.com/in/pelumi-onasoga-4767081ba/"}>
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
          <div className="border-t-2 my-2 flex items-center py-8 border-white10">
            <p className="font-madi text-6xl mr-auto">Pelumi</p>
            <p>Made with Next.js and TailwindCSS</p>
          </div>
        </div>
        <div className="w-[90%] sm:w-[50%]">
          <Image src={ContactIllustration} alt="contact" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
