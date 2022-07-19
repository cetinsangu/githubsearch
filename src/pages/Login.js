import {
  AiOutlineGoogle,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

function Login() {
  return (
    <div className="font-poppins">
      <div className="sm:w-1/2 bg-gray-800">
        <div className="flex flex-col w-[80vw] h-screen mx-auto items-center justify-center">
          <div className="flex flex-row gap-5 text-white text-lg p-3 mb-5">
            <p>Sign Up</p>
            <p className="border-b-4 border-sky-600">Login</p>
          </div>
          <h1 className="text-white text-2xl ">Welcome Back!</h1>
          <form className="flex flex-col gap-1 w-full mt-5">
            <label className="text-white text-base">E-mail</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="text"
              placeholder="name@gmail.com"
            />
            <label className="text-white text-base">Password</label>
            <input
              className="w-full p-2 border border-gray-400 rounded-lg"
              type="password"
              placeholder="6+ characters"
            />
            <a className="text-sky-400 mt-1 text-sm" href="#">
              Forgot password?
            </a>
            <button className="w-full p-4 mt-5 bg-blue-400 text-white rounded-lg">
              Login
            </button>
            <p className="text-white text-center mt-5">or login using</p>
            <div className="flex justify-center flex-row gap-4 mt-5 text-white">
              <a className="border-gray-400 border p-2 rounded-full" href="#">
                <AiOutlineGithub size={30} />
              </a>
              <a className="border-gray-400 border p-2 rounded-full" href="#">
                <AiOutlineGoogle size={30} />
              </a>
              <a className="border-gray-400 border p-2 rounded-full" href="#">
                <AiOutlineTwitter size={30} />
              </a>
            </div>
            <button className="w-full p-4 mt-7 bg-red-700 text-white rounded-lg">
              I'm a tester!
            </button>
          </form>
        </div>
      </div>
      <div className="hidden sm:w-1/2 bg-slate-700">ss</div>
    </div>
  );
}

export default Login;
