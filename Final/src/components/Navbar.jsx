import { Link } from "react-router-dom";
import logo from '../imgs/csdj.png';

export default function Navbar() {
    return (
        <nav className="flex justify-between w-full bg-white py-1 md:h-10 lg:h-14 items-center md:mt-5 md:mb-5">
            <div className="flex justify-start items-center h-full md:ml-10 space-x-4">
                <Link to="/" className="font-serif text-lg md:text-5xl justify-self-start flex items-center"><img className="object-contain h-10 w-10 mr-6" src={logo}></img>David Reed</Link>
            </div>
            <div className="flex justify-end items-center h-full mr-20 space-x-20 font-sans text-base md:text-2xl">
                <Link to="/" className="underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300">Home</Link>
                <Link to="/about" className="underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300">About</Link>
                <Link to="/courses" className="underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300">Courses</Link>
                <div className="underline transition-colors ease-in-out text-black decoration-transparent hover:text-accent-blue hover:decoration-accent-blue duration-300">Department</div>
            </div>
        </nav>
    );
}