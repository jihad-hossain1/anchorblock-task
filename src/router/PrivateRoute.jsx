import { useLocation, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { setUser, toggleLoading } from "../redux/fetures/users/userSlice";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { email, isLoading } = useSelector((state) => state.userSlice);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
        dispatch(toggleLoading(false));
      } else {
        dispatch(toggleLoading(false));
      }
      console.log(user);
    });
  }, [dispatch]);
  if (isLoading) {
    return <div>Loading......</div>;
  }
  if (!isLoading && !email) {
    return <Navigate to={`/signin`} state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoute;
