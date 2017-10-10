import React, { Component } from "react";
import "./css/style.css";
import { Layout } from "./components";

class App extends Component {
  componentDidMount() {
    console.log(
      "WHOA! You just opened the dev tools. You must be a developer! Since you're here... How about a joke? How do you comfort a JavaScript bug? ... You console it! Also you should hire me!"
    );
  }

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
