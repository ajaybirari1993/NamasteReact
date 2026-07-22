import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSingIn, setIsSignin] = useState(true);

  const toggleSignIn = () => {
    setIsSignin((prev) => !prev);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="fixed top-0 left-0 w-screen h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2f42605e-e786-4a06-8612-ebc67c55ba6c/web/IN-en-20260629-TRIFECTA-perspective_76b17e8c-cff9-4c65-9938-08ca5029be6b_medium.jpg"
          alt="background image"
        />
      </div>

      <form
        className="w-96 p-8
             bg-black/60
             backdrop-blur-lg\
             rounded-xl
             border border-white/10
             shadow-2xl
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h1 className="text-white text-2xl py-2">
          {isSingIn ? "Sign in" : "Sign Up"}
        </h1>

        {!isSingIn && (
          <input
            type="Name"
            placeholder="Name"
            className="w-full px-4 py-3 mb-4
             bg-gray-800/70
             text-white
             placeholder-gray-400
             border border-gray-600
             rounded-md
             outline-none
             focus:border-red-600
             focus:ring-2
             focus:ring-red-600/30
             transition-all duration-200"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4
             bg-gray-800/70
             text-white
             placeholder-gray-400
             border border-gray-600
             rounded-md
             outline-none
             focus:border-red-600
             focus:ring-2
             focus:ring-red-600/30
             transition-all duration-200"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-3 mb-4
             bg-gray-800/70
             text-white
             placeholder-gray-400
             border border-gray-600
             rounded-md
             outline-none
             focus:border-red-600
             focus:ring-2
             focus:ring-red-600/30
             transition-all duration-200"
        />
        <button
          className="w-full py-3
             bg-red-600
             text-white
             font-semibold
             rounded-md
             hover:bg-red-700
             active:scale-[0.98]
             transition-all duration-200
             cursor-pointer"
        >
          {isSingIn ? "Sign in" : "Sign Up"}
        </button>

        <p className="text-white pt-2.5">
          {" "}
          {isSingIn ? "New user" : "Already register"} ?{" "}
          <span className="text-blue-600 cursor-pointer" onClick={toggleSignIn}>
            {isSingIn ? "Sign Up" : "Sign In"}
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
