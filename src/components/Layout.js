import React, { Component } from "react";
import {
  NavBar,
  Header,
  Skills,
  Portfolio,
  Experience,
  Contact,
  Footer
} from "../components";

export default class Layout extends Component {
  componentDidMount() {
    let baseLayout = document.querySelector(".page");
    baseLayout.onload = setTimeout(function() {
      let pageLoader = document.querySelector(".page-loader");
      pageLoader.style.display = "none";
    }, 1000);
  }

  render() {
    return (
      <div className="page" id="top">
        <NavBar />
        <Header />
        <Skills />
        <Portfolio />
        <Experience />
        <hr className="mt-0" />
        <Contact />
        <Footer />
      </div>
    );
  }
}
