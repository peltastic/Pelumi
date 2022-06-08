import { Link } from "react-scroll";

function SideNav({ show, clicked }) {
  return (
    <div
      className={`transition-all w-9/12  h-screen bg-neutral-800 fixed top-0 left-0 z-30 ${
        !show ? "-translate-x-full" : null
      }`}
    >
      <ul className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center flex-col">
        <li className="my-2">
          <Link to="home" spy={true} smooth={true} onClick={clicked}>
            <p>HOME</p>
          </Link>
        </li>
        <li className="my-2">
          <Link to="projects" spy={true} smooth={true} onClick={clicked}>
            <p>PROJECTS</p>
          </Link>
        </li>
        <li className="my-2">
          <Link to="inspirations" spy={true} smooth={true} onClick={clicked}>
            <p>INSPIRATIONS</p>
          </Link>
        </li>
        <li className="my-2">
          <a href={"https://drive.google.com/file/d/13Rij9kFpMmfUgF93cYBiZx8726qWGYnU/view"}>
            <p>RESUME</p>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
