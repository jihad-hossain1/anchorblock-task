import { BiSolidUser } from "react-icons/bi";
import { useState } from "react";
import { motion_nav } from "../../utils/fremer.motion";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const Dropdown = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [isUser, setIsUser] = useState(getUser());
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setIsUser(null);

    setTimeout(() => {
      navigate("/signin");
    }, 1500);
  };

  return (
    <div className="relative">
      <button onClick={() => setIsToggle(!isToggle)}>
        <BiSolidUser size={23} />
      </button>
      {isToggle && (
        <motion.div
          {...motion_nav}
          className="fixed z-50 mt-7 -ml-28 text-zinc-900"
        >
          <ul className="shadow-md border bg-zinc-50 flex flex-col gap-1 max-w-xs mx-auto rounded-md py-3">
            {!isUser ? (
              <>
                <li className="chover">
                  <Link to={"/signin"} className="">
                    SignIn
                  </Link>
                </li>
                <li className="chover">About</li>
              </>
            ) : (
              <>
                <li className="chover">Profile</li>
                <li onClick={handleLogOut} className="chover">
                  Logout
                </li>
              </>
            )}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Dropdown;
