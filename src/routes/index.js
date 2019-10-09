import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Paginas */
import Home from "../Pages/Home";
import Single from "../Pages/Single";
import About from "../Pages/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Single} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
