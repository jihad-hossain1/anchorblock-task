import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { searchUser } from "../../redux/fetures/usersSlice";

const SearchUserInput = () => {
  const [toggle, setToggle] = useState(false);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //   const {} = useSelector((state) => state?.user);
  const location = useLocation();

  let path = location.pathname;

  const handleSubmit = (e) => {
    e.preventDefault();

    path === "/dashboard/users" && dispatch(searchUser(input));
    //   path === '/' && dispatch(search(input))
  };
  return (
    <>
      <button className="" onClick={() => setToggle(!toggle)}>
        <SlMagnifier size={21} />
      </button>

      {toggle && (
        <form onSubmit={handleSubmit}>
          <input
            className="cinpt bg-transparent"
            value={input}
            type="search"
            name=""
            onChange={(e) => setInput(e.target.value)}
            id=""
          />
        </form>
      )}
    </>
  );
};

export default SearchUserInput;
