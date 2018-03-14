import React, { Component } from "react";
import reactScroll from "react-scroll";

var Link = reactScroll.Link;

export default class Footer extends Component {
  render() {
    return (
      <footer
        className="page-section bg-gray-lighter footer"
        style={{ padding: "2em" }}
      >
        <div className="container">
          <div className="footer-text">
            <div className="footer-copy font-alt">
              &copy; Dakota Nichols 2018.
            </div>
          </div>
        </div>
        <div className="local-scroll">
          <Link
            to="top"
            activeClass="activeScroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            className="link-to-top"
          >
            <i className="fa fa-caret-up" />
          </Link>
        </div>
      </footer>
    );
  }
}
