import { useDispatch } from "react-redux";
import { changePageNumber } from "../../../redux/fetures/usersSlice";

const PaginatedUser = ({ userPage, numberOfUser, total_pages }) => {
  //   console.log(userPage, numberOfUser);
  const dispatch = useDispatch();

  const incPageNumber = (cp) => {
    if (userPage < numberOfUser) {
      dispatch(changePageNumber(cp + 1));
    }
  };

  const decPageNumber = (cp) => {
    if (userPage == 1) {
      alert("you are on page 1");
    } else {
      dispatch(changePageNumber(cp - 1));
    }
  };
  return (
    <>
      <tr>
        <th>
          <button
            disabled={userPage == 1}
            onClick={() => decPageNumber(userPage)}
            className={`${
              userPage == 1 ? "bg-gray-200 text-gray-500" : ""
            } cbtn border border-gray-300 font-normal my-2 mx-3`}
          >
            Previous
          </button>
        </th>
        <th></th>

        <th></th>

        <th>
          <button
            disabled={userPage == total_pages}
            onClick={() => incPageNumber(userPage)}
            className={`${
              userPage == total_pages ? "bg-gray-200 text-gray-500" : ""
            } cbtn border border-gray-300 font-normal my-2 mx-3`}
          >
            Next
          </button>
        </th>
      </tr>
    </>
  );
};

export default PaginatedUser;
