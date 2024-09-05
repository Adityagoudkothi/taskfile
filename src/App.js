import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./App.css";
import Home from "./components/home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App = () => {

  return (
    <React.Fragment>
     <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
