import { Link } from "react-router-dom";
import LoginLogo from "./LoginLogo";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { framer_error } from "../../utils/fremer.motion";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="flex justify-center items-center h-[100vh]">
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
