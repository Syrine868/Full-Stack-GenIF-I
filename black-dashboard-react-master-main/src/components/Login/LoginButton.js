import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
console.log("connected");
  return <button onClick={() => loginWithRedirect()} id="qsLoginBtn" className="btn-outline-primary">Log In</button>

      ;

};

export default LoginButton;
