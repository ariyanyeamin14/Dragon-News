import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContex } from '../provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContex)
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        if(name.length < 5){
            return setError({name: "Name must be 5 character"})
        }
        const photo = e.target.photo.value
        const email = e.target.email.value
        const password = e.target.password.value
        if(password.length < 5){
            return setError({password: "Password must be 6 character"})
        }
        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div className="min-h-screen flex items-center justify-center  text-[#403F3F] p-32">
            <div className="card bg-base-100 w-full max-w-3xl shrink-0 p-10">
                <h1 className="text-center text-3xl font-semibold font-poppins text-[#403F3F]">Register your account</h1>
                <form onSubmit={handleSubmit} className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Name</span>
                        </label>
                        <input type="text" placeholder="name" name='name' className="input bg-[#f3f3f3] input-bordered" required />
                        {
                            error && <p className='text-red-500 font-medium'>{error?.name}</p>
                        }
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo" name='photo' className="input bg-[#f3f3f3] input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Email Address</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input bg-[#f3f3f3] input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold text-xl text-[#403F3F]">Password</span>
                        </label>
                        <input type="password" placeholder="password" name='password' className="input input-bordered bg-[#f3f3f3]" required />
                        {
                            error && <p className='text-red-500 font-medium'>{error?.password}</p>
                        }
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