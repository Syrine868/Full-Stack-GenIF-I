import './App.css';
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';

const HomeView = lazy(() => import("./pages/home"));

function App() {
  return <BrowserRouter>
  <React.Fragment>
  <Suspense fallback={
     <div className="text-white text-center mt-3">Loading...</div>}>
  <Switch>
    <Route exact path = "/">
      <Redirect to = "/bakhtArt"/>
    </Route>
    <Route exact path="/bakhtArt" component={HomeView} />
  </Switch>
  </Suspense>
  </React.Fragment>
  </BrowserRouter>
}

export default App;
