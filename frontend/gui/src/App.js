import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import "antd/dist/antd.css";

import CustumLayout from "./containers/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustumLayout>
            <BaseRouter />
          </CustumLayout>
        </Router>
      </div>
    );
  }
}

export default App;
