import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3] font-poppins text-[#403F3F]">
            <div className="w-[85%] mx-auto">
                <section className="py-8">
                    <Navbar></Navbar>
                </section>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;