import Link from "next/link";


const Navbar = () => {
    return (
        <div>
            <Link href = "/">Home</Link>
            <Link href = "../resume">Resume</Link>
        </div>
    )
}

export default Navbar;