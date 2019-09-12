import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Routes from "./routes/index";
import GlobalStyle from "./styles/global";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
