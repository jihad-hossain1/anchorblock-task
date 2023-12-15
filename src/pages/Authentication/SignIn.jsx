import { Link, useNavigate, Navigate } from "react-router-dom";
import LoginLogo from "./LoginLogo";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { framer_error } from "../../utils/fremer.motion";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useSelector } from "react-redux";

const SignIn = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    isError,
    error,
    email: isEmail,
  } = useSelector((state) => state.userSlice);
  // console.log(isEmail, error);

  const [gestEmail, setGestEmail] = useState("");
  const [gestPassword, setGestPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <Toaster />
      <div className="p-6 md:p-10 border shadow-[2px_5px_15px_rgba(0,0,0,0.25)] rounded-xl flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <LoginLogo />
            <h4 className="font-bold text-2xl">Stack</h4>
          </div>
          <h4 className="font-semibold text-xl">
            Sign In to continue with Stack
          </h4>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full md:w-[330px] mx-auto"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email field is required",
                },
              })}
              defaultValue={gestEmail}
              type="email"
              name="email"
              className={` ${
                errors.email && "focus:outline-red-500 border border-red-500"
              } cinpt`}
            />
            {errors.email && (
              <motion.span {...framer_error} className="text-sm text-red-600">
                {errors?.email.message}
              </motion.span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              defaultValue={gestPassword}
              {...register("password", {
                required: {
                  value: true,
                  message: "password field is required",
                },
              })}
              type="password"
              name="password"
              className={` ${
                errors.password && "focus:outline-red-500 border border-red-500"
              } cinpt`}
            />

            {errors.password && (
              <motion.span {...framer_error} className="text-sm text-red-600">
                {errors.password.message}
              </motion.span>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="cbtn bg-[#6941C6] w-full text-zinc-50 py-2"
            >
              SignIn
            </button>
          </div>
        </form>
        <div>
          <button
            type="button"
            className="cbtn bg-green-600 w-full text-zinc-50 py-2"
            onClick={() => {
              setGestEmail("a@a.com");
              setGestPassword("123456");
            }}
          >
            Get Guest User Credentials
          </button>
        </div>
        <div className="text-sm flex items-center gap-2">
          <h4 className="text-gray-500 ">Don’t have an account? </h4>{" "}
          <Link to={"/signup"} className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
