import Link from "next/link"

function SideNav({show}) {
    return (
        <div className={`transition-all w-9/12  h-screen bg-neutral-800 fixed top-0 left-0 z-30 ${ !show ? "-translate-x-full": null}`}>
            <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex items-center flex-col">
                <li className="my-2">
                    <Link href={"/"}>
                        <a>HOME</a>
                    </Link>
                </li>
                <li className="my-2">
                    <Link href={"/projects"}>
                        <a>PROJECTS</a>
                    </Link>
                </li>
                <li className="my-2">
                    <Link href={"/aboutme"}>
                        <a>ABOUT ME</a>
                    </Link>
                </li>
                <li className="my-2">
                    <Link href={"https://pelumix.netlify.app/assets/resume.pdf"}>
                        <a>RESUME</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideNav
