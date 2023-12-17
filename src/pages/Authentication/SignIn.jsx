import { Link, useNavigate } from "react-router-dom";
import LoginLogo from "./LoginLogo";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUsersQuery } from "../../redux/fetures/api/baseApi";
import { loginUser } from "../../redux/fetures/UserSlice";

const SignIn = () => {
  const { data } = useGetUsersQuery();
  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    let userCrednt = {
      email,
      password,
    };

    let filt = data?.data.find((user) => user.email == email);

    if (filt?.email == email) {
      dispatch(loginUser(userCrednt)).then((result) => {
        if (result.payload) {
          setEmail("");
          setPassword("");
          navigate("/dashboard");
        }
      });
    } else {
      return toast.error(`${email} not match , use "gest user credentials" `);
    }
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
          onSubmit={handleLogin}
          className="flex flex-col gap-5 w-full md:w-[330px] mx-auto"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              required
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              type="email"
              name="email"
              className="cinpt"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="password">Password</label>
            <input
              required
              onChange={(e) => setPassword(e.target.value)}
              className="cinpt"
              defaultValue={password}
              type="password"
              name="password"
            />
          </div>
          <div>
            <button
              type="submit"
              className="cbtn bg-[#6941C6] w-full text-zinc-50 py-2"
            >
              {loading ? "Loading..." : "SignIn"}
            </button>
          </div>
        </form>
        <div>
          <button
            type="button"
            className="cbtn bg-green-600 w-full text-zinc-50 py-2"
            onClick={() => {
              setEmail("eve.holt@reqres.in");
              setPassword("cityslicka");
            }}
          >
            Get Guest User Credentials
          </button>
        </div>
        {error && <div className="bg-pink-200 rounded p-3 w-fit">{error}</div>}
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
