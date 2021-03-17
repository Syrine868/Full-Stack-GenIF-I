import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter/*, Route, Switch, Redirect*/ } from "react-router-dom";

import AdminLayout from "layouts/Admin/Admin.js";
//import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

import Auth0ProviderWithHistory from "./auth/auth0-history";
//import Login from "./views/Login";
import LogoutButton from "./components/Login/LogoutButton";
import LoginButton from "./components/Login/LoginButton";
//import UserProfile from "./views/UserProfile";

ReactDOM.render(
    <>
          <BrowserRouter>
     <Auth0ProviderWithHistory >
  <ThemeContextWrapper>
    <BackgroundColorWrapper>


<AdminLayout/>

        {/*
        <Switch>
          <Route path="/login" render={(props) => <Login {...props}/>}/>
          <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
          <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />

        </Switch>*/}
    </BackgroundColorWrapper>
  </ThemeContextWrapper>,
           </Auth0ProviderWithHistory>
                  </BrowserRouter>
</>,
  document.getElementById("root")
);
