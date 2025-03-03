import { Navigate } from "react-router-dom";
import logOut from "../../utils/auth/logOut";

const LogOut = () => {
  if (logOut()) {
    return <Navigate to="/" />;
  }

  throw new Error("Could not log out");
};

export default LogOut;
