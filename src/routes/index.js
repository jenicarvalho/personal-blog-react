import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

/** Paginas */
import Default from "../Pages";
import Home from "../Pages/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Default>
          <Route path="/" component={Home} />
        </Default>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
