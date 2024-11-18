import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div className=""></div>
            <div className="space-x-5 text-lg text-gray-500">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex items-center gap-4">
                <img src={userIcon} alt="" />
                <button className="bg-gray-600 text-xl font-semibold text-white py-2 px-4">Login</button>
            </div>
        </div>
    );
};

export default Navbar;