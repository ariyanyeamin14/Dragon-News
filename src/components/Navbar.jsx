import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContex)

    return (
        <div className="flex justify-between">
            <div className="">
                <h3>
                    {user?.email}
                </h3>
            </div>
            <div className="space-x-5 text-lg text-gray-500">
                <Link to={"/"}>Home</Link>
                <Link>About</Link>
                <Link>Career</Link>
            </div>
            <div className="flex items-center gap-4">
                <img src={userIcon} alt="" />
                {
                    user? 
                    <button onClick={signOutUser} className="bg-gray-600 text-xl font-semibold text-white py-2 px-4">Log Out</button> 
                    : 
                    <Link to={"/auth/login"} className="bg-gray-600 text-xl font-semibold text-white py-2 px-4">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;