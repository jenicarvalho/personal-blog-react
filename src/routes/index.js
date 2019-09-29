import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Paginas */
import Default from "../Pages";
import Home from "../Pages/Home";
import Single from "../Pages/Single";
import About from "../Pages/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Default>
          <Route exact path="/" component={Home} />
          <Route path="/post/:post" component={Single} />
          <Route path="/about" component={About} />
        </Default>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
