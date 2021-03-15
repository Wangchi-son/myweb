import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";

import CustumLayout from "./containers/Layout";
import ArticleList from "./containers/ArticleListView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustumLayout></CustumLayout>
        <ArticleList />
      </div>
    );
  }
}

export default App;
