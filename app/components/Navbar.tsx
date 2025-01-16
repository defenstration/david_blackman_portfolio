import Link from "next/link";


const Navbar = () => {
    return (
        <div className = "flex flex-col px-4">
            <Link className = "nav-btn py-4" href = "/">Home</Link>
            <Link className = "nav-btn py-4" href = "../resume">Resume</Link>
        </div>
    )
}

export default Navbar;