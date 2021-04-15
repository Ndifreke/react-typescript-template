import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PublicRoute = ({ children }: { children: any }) => {
  const isAuth = useContext(AuthContext);
  console.log(isAuth, "Auth",children);
  return children;
  //   return isAuth ? (
  //     children
  //   ) : (
  //     <Redirect
  //       to={{
  //         pathname: "/login",
  //         // state: { from: location },
  //       }}
  //     />
  //   );
};

export default PublicRoute;
