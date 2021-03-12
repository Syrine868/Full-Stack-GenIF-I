import React from "react";

import LoginButton from "components/Login/LoginButton";
import LogoutButton from "components/Login/LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
