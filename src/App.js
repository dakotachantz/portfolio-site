import React, { Component } from "react";
import "./css/style.css";
import { Layout } from "./components";

class App extends Component {
  render() {
    return (
      <div className="appear-animate">
        <div className="page-loader">
          <div className="loader">Loading...</div>
        </div>
        <Layout />
      </div>
    );
  }
}

export default App;
