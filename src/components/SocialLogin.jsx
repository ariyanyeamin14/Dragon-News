import { FaGithub, FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div>
            <h1 className='text-xl font-semibold'>Login With</h1>
            <div className="flex flex-col gap-3 mt-6">
                <button className='btn bg-base-100'> <FaGoogle /> Login with Google</button>
                <button className='btn bg-base-100'> <FaGithub/> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;