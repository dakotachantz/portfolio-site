import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
// import { NavLink } from "react-router-dom";
import reactScroll from "react-scroll";
import resume from "../documents/Dakota_Nichols_Resume.pdf";
import logo from "../images/logo.png";
var Link = reactScroll.Link;
// import logo from "../img/logo-white.png";

export default class MobileNav extends Component {
  render() {
    return (
      <Menu
        right
        noOverlay
        isOpen={this.props.isOpen}
        onStateChange={state => this.props.handleStateChange(state)}
      >
        <div
          className="nav-logo"
          style={{
            margin: "1em",
            display: "flex",
            height: "1em",
            justifyContent: "center"
          }}
        >
          <Link
            to="home"
            className="logo-item"
            style={{ height: "min-content" }}
          >
            <img src={logo} alt="" width="25" />
          </Link>
        </div>
        <div className="">
          <ul className="mobile-ul" style={{ listStyle: "none" }}>
            <li>
              <Link
                to="home"
                spy={true}
                className="font-alt"
                smooth={true}
                offset={0}
                duration={700}
                style={{ borderTop: "1px solid #272727" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                className="font-alt"
                smooth={true}
                offset={0}
                duration={700}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                spy={true}
                className="font-alt"
                smooth={true}
                offset={0}
                duration={700}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                spy={true}
                className="font-alt"
                smooth={true}
                offset={0}
                duration={700}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                className="font-alt"
                smooth={true}
                offset={0}
                duration={700}
              >
                Contact
              </Link>
            </li>

            {/* <!-- Button --> */}
            <li>
              <a href={resume} target="_blank">
                <span className="font-alt" style={{ margin: 0 }}>
                  <i className="fa fa-cloud-download" /> Download CV
                </span>
              </a>
            </li>
            {/* <!-- End Button --> */}
          </ul>
        </div>
      </Menu>
    );
  }
}
