import Nav from "../components/Nav";
import classes from "../styles/background.module.css";
import { HiArrowNarrowDown } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import {AiOutlinePause} from "react-icons/ai"
import { Fragment } from "react";

function Aboutme() {
  const models = [
    {
      name: "Iyinoluwa Aboyeji",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/egmc1uliwmkuz2epho10",
      link: "https://www.linkedin.com/in/eaboyeji/?originalSubdomain=ng",
      desc: "Iyinoluwa Samuel Aboyeji is a Nigerian entrepreneur. He is a co-founder of Andela, and was the former managing director of Flutterwave",
    },
    {
      name: "Marques Brownlee",
      image:
        "https://imgix.ranker.com/user_node_img/4269/85373644/original/marques-brownlee-photo-u1?fm=pjpg&q=80",
      link: "https://www.youtube.com/c/mkbhd",
      desc: "Marques Brownlee is a youtuber, he is know for reviewing devices and talking about tech",
    },
    {
      name: "Opeyemi Awoyemi",
      image:
        "https://techcabal.com/wp-content/uploads/2014/11/opeyemi-awoyemi.jpg",
      link: "https://www.linkedin.com/in/opeawo/",
      desc: "Opeyemi Awoyemi is the cofounder of jobberman, talenql and moneymie",
      donshow: true
    },
  ];
  return (
    <div className={`${classes.background}`}>
      <Nav />
      <div className={`text-white bg-gray-800 p-4 w-8/12 mx-auto mt-12 ${classes.about}`}>
        <h1>
          Hi, I'm Onasoga Pelumi from Nigeria. I love programming, learnig new
          things, meeting new people and i've been inspired by alot of people.
          Here are a few list of them.{" "}
        </h1>
      </div>
      <HiArrowNarrowDown className="text-white text-2xl mx-auto mt-4 mb-4" />
      {models.map((item, index) => {
        return (
          <Fragment key={index}>
            <div
              className={`bg-gray-800 p-2 w-4/12 mx-auto mb-2 relative ${classes.models} ${item.donshow? "mb-4" : null}`}
              
            >
              <div className="absolute top-2 left-2">
                {item.image ? (
                  <Image
                    className="rounded-full "
                    src={item.image}
                    width={50}
                    height={50}
                  />
                ) : (
                  <div className="bg-gray-700 h-14 w-14 rounded-full animate-pulse"></div>
                )}
              </div>
              <h1 className="ml-16 text-white">{item.name} </h1>
              <p className="ml-16 text-white">{item.desc}</p>
              <Link href={`${item.link}`}>
                <a>
                  <BiLinkExternal className="ml-16 text-white" />
                </a>
              </Link>
            </div>
                  {!item.donshow ? <AiOutlinePause className="text-white mx-auto text-2xl mb-2"/>: null}
          </Fragment>
        );
      })}
    </div>
  );
}

export default Aboutme;
