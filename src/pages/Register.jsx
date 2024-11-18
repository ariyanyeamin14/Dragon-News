import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  text-[#403F3F] p-32">
            <div className="card bg-base-100 w-full max-w-3xl shrink-0 p-10">
                <h1 className="text-center text-3xl font-semibold font-poppins text-[#403F3F]">Register your account</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Name</span>
                        </label>
                        <input type="text" placeholder="name" className="input bg-[#f3f3f3] input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo" className="input bg-[#f3f3f3] input-bordered" required />
                    </div>
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
                        <input type="password" placeholder="password" className="input input-bordered bg-[#f3f3f3]" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#403F3F] text-white">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center text-[#706F6F]">Already Have An Account ? 
                    <Link to={"/auth/login"} className="text-red-500">  Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;