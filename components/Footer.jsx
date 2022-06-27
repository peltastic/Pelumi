import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    { href: "mailto:onosogapelumi@gmail.com", content: "Email Me" },
    {
      href: "https://linkedin.com/in/pelumi-onasoga-4767081ba/",
      content: "LinkedIn",
    },
    { href: "https://twitter.com/peltastica", content: "Twitter" },
    { href: "https://github.com/peltastic", content: "Github" },
  ];
  return (
    <footer
      id="contact"
      max-width="1650px"
      className="bg-[#111111]  w-full py-10 text-[#fff] mt-12 sm:mt-auto"
    >
      <h1 className="font-secondary text-5xl text-center mt-4 mb-28">
        CONTACT ME
      </h1>
      <div className="flex flex-wrap items-center mb-20 justify-around ">
        <div className=" w-full sm:w-[50%] flex sm:block justify-center sm:justify-self-auto">
          <p className="text-3xl w-[70%] text-center">
            I am currently available for freelance or full time roles and
            collaborations, i will respond to your messages within the next 24
            hours{" "}
          </p>
        </div>
        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-self-auto mt-28 sm:mt-auto mb-12 sm:mb-auto">
          {footerLinks.map((item, index) => {
            return (
              <div
                key={index}
                className=" mx-8 cursor-pointer shadow-lg rounded-full "
              >
                <Link href={item.href}>
                  <a className="text-primary-dark text-2xl">{item.content}</a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-center text-3xl sm:text-xl">
        Made with nextjs, framer-motion and tailwindcss
      </p>
    </footer>
  );
};

export default Footer;
