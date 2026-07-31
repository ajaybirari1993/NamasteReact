import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation, getFirebaseErrorMessage } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSingIn, setIsSignin] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignIn = () => {
    setIsSignin((prev) => !prev);
  };

  const handleButtonClick = () => {
    const messages = checkValidation(
      emailRef.current.value,
      passwordRef.current.value,
    );

    setErrorMsg(messages);
    if (messages) return;

    if (isSingIn) {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const msg = getFirebaseErrorMessage(error.code);
          console.log(msg);
          setErrorMsg(msg);
        });
    } else {
      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const msg = getFirebaseErrorMessage(error.code);
          console.log(msg);
          setErrorMsg(msg);
        });
    }
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
        onSubmit={(e) => e.preventDefault()}
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
          ref={emailRef}
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
          ref={passwordRef}
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
          onClick={handleButtonClick}
        >
          {isSingIn ? "Sign in" : "Sign Up"}
        </button>

        <p className="mt-2 text-sm text-[#ff7f72]">{errorMsg}</p>

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
