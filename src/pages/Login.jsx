import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContex)
    const [error, setError] = useState()
    const location = useLocation()
    const navigate = useNavigate()

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value;

        signInUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(location.state ? location.state : '/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }
    return (
        <div className="min-h-screen flex items-center justify-center  text-[#403F3F] p-32">
            <div className="card bg-base-100 w-full max-w-3xl shrink-0 p-10">
                <h1 className="text-center text-3xl font-semibold font-poppins text-[#403F3F]">Login your account</h1>
                <form onSubmit={handleSignIn} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Email Address</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input bg-[#f3f3f3] input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input bg-[#f3f3f3] input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn  bg-[#403F3F] text-white">Login</button>
                    </div>
                    {
                        error && <p className="text-red-500 font-medium">Invalid email or password</p>
                    }
                </form>
                <p className="font-semibold text-center text-[#706F6F]">Dont’t Have An Account ?
                    <Link to={"/auth/register"} className="text-red-500">  Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;