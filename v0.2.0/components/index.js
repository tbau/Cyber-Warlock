import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom'

import App from "./App";

const location = useLocation()
console.log(location.pathname);

const appRouting = (
  
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
    </Routes>
  </Router>
);

ReactDOM.render(appRouting, document.getElementById("root"));