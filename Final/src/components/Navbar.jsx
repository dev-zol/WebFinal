import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-end space-x-4 w-full">
            <div className="flex space-x-4  mr-4">
                <Link to="/">Home</Link>
                <div>About</div>
                <div>Courses</div>
                <div>Department</div>
            </div>
        </nav>
    );
}