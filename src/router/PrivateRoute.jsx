import { Navigate } from "react-router-dom";
import { useState } from "react";

function getUser() {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
  } else {
    user = null;
  }
  return user;
}

const PrivateRoute = ({ children }) => {
  const [isUser, isSetUser] = useState(getUser());
  if (!isUser) {
    return <Navigate to={`/signin`} />;
  }
  if (isUser) {
    return children;
  }
  return children;
};

export default PrivateRoute;
