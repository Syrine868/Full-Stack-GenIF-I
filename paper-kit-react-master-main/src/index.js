import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import GenreSubscribeForm from "views/examples/GenreSubscribeForm.js";
import ContactInfoSubscribe from "./views/examples/ContactInfoSubscribe";
import AccountInfoSubscribe from "./views/examples/AccountInfoSubscribe";
import LoginPage from "views/examples/LoginPage.js";

// others
import * as serviceWorker from './serviceWorker';
import {I18nextProvider} from "react-i18next";
//import i18next from "i18next";
import i18n from "./translation";
//import common_en from "../src/translations/en/common";
//import common_fr from "../src/translations/fr/common";


/*i18next.init({
  interpolation : {escapeValue: false},
    lng:'en',
    resources:{
      en:{
          common: common_en
      },
      fr:{
          common : common_fr
        },
    },
})*/

ReactDOM.render(


        <BrowserRouter>
    <Switch>

      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        component={RegisterPage} />

      <Route
        path="/register-gender-page"
        component={GenreSubscribeForm}  />

      <Route
        path="/register-contact-page"
        component={ContactInfoSubscribe}
      />
      <Route
        path="/register-account-page"
        component={AccountInfoSubscribe}
      />
      <Route
        path="/login-page"
        component={LoginPage}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,


  document.getElementById("root")
);
serviceWorker.unregister();