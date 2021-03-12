import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import SignUp from "./views/SignUpPage/SignUp";
import Start from "./views/StartApplication/Start";
import Contact from "./views/StartApplication/ContactInformation";
import Account from "./views/StartApplication/AccountInformation";
import BuildApp_First from "./views/StartApplication/BuildApp_First";
import { Auth0Provider } from "@auth0/auth0-react";


var hist = createBrowserHistory();

ReactDOM.render(
 <Auth0Provider
    domain="dev-cwzqxhqz.us.auth0.com"
    clientId="aA44anYnk9Uf7yMqGP0QBaUhZNLsrtDn"
    redirectUri={window.location.origin}
  >

     <Router history={hist}>
            <Switch>
                <Route path="/landing-page" component={LandingPage}/>
                <Route path="/login-page" component={LoginPage}/>
                <Route path="/subscribe-page" component={SignUp}/>
                <Route path="/start-page" component={Start}/>
                <Route path="/contact-info-page" component={Contact}/>
                <Route path="/account-info-page" component={Account}/>
                <Route path="/build-app-first-step" component={BuildApp_First}/>
                <Route path="/" component={Components}/>
            </Switch>
        </Router>,
 </Auth0Provider>,
    document.getElementById("root")
);
