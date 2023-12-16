import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-[100vh]">
      <div className="flex flex-col gap-4">
        <Link
          className="cbtn bg-[rgb(105,65,198)] text-center text-zinc-50"
          to={"/dashboard"}
        >
          Dashboard
        </Link>
        <div className="flex items-center gap-4">
          <Link
            className="cbtn text-center border border-zinc-200 hover:border-zinc-400"
            to={"/signin"}
          >
            SignIn
          </Link>
          <Link
            className="cbtn text-center border border-zinc-200 hover:border-zinc-400"
            to={"/signup"}
          >
            SignUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
