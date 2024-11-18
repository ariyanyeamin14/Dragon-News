import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  text-[#403F3F] p-32">
            <div className="card bg-base-100 w-full max-w-3xl shrink-0 p-10">
                <h1 className="text-center text-3xl font-semibold font-poppins text-[#403F3F]">Login your account</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Email Address</span>
                        </label>
                        <input type="email" placeholder="email" className="input bg-[#f3f3f3] input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input bg-[#f3f3f3] input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#403F3F] text-white">Login</button>
                    </div>
                </form>
                <p className="font-semibold text-center text-[#706F6F]">Dont’t Have An Account ? 
                    <Link to={"/auth/register"} className="text-red-500">  Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;