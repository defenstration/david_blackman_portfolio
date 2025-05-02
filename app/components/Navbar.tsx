import Link from "next/link";


const Navbar = () => {
    return (
        <div className = "flex flex-col px-4 fixed w-fit h-fit">
            <Link className = "nav-btn py-4" href = "/">Home</Link>
            <Link className = "nav-btn py-4" href = "../resume">Resume</Link>
            <Link className = "nav-btn py-4" href = "../projects">Projects</Link>
        </div>
    )
}

export default Navbar;