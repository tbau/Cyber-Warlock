import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import App from "./App";

const appRouting = (
  <Router basename={window.location.pathname}>
    <Routes>
      <Route path="/" element={<App/>} />
    </Routes>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));