import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Paginas */
import Home from "../Pages/Home";
import Single from "../Pages/Single";
import About from "../Pages/About";
import CategoryList from "../Pages/CategoryList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/categoria/:name/:category" component={CategoryList}  />
        <Route exact path="/" component={Home} />
        <Route path="/:postslug" component={Single} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
