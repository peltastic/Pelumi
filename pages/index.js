import Nav from "../components/Nav";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import Link from "next/link";
import classes from "../styles/background.module.css"

export default function Home() {
  return (
    <div className={classes.background}>
      <Nav />
      <div className={` text-white  absolute custom-top left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${classes.header}`}>
        <h1 className="text-2xl">HI, I'M PELUMI</h1>
        <p className=" text-sm">
          I'm a frontend End Developer, check out my works and know more about
          me
        </p>
        <div className={`flex text-4xl w-6/12 justify-around m-auto mt-8 ${classes.social_links}` }>
          <Link href="https://twitter.com/peltastic">
            <a>
              <BsTwitter className=" hover:translate-y-3 active:translate-y-1 transition-all" />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/pelumi-onasoga-4767081ba/">
            <a>
              <BsLinkedin className=" hover:translate-y-3 active:translate-y-1 transition-all" />
            </a>
          </Link>
          <Link href="https://github.com/peltastic">
            <a>
              <BsGithub className=" hover:translate-y-3 active:translate-y-1 transition-all" />
            </a>
          </Link>
          <Link href="mailto:onosogapelumi@gmail.com">
            <a>
              <AiTwotoneMail className=" hover:translate-y-3 active:translate-y-1 transition-all" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
