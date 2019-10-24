import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Paginas */
import Home from "../pages/Home";
import Single from "../pages/Single";
import CategoryList from "../pages/CategoryList";

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
