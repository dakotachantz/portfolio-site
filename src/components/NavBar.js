import React, { Component } from "react";
import resume from "../documents/Dakota_Nichols_Resume.pdf";
import logo from "../images/logo.png";
import Headroom from "react-headroom";
import reactScroll from "react-scroll";
var Link = reactScroll.Link;

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "transparent"
    };
  }
  componentWillMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = e => {
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (scrollTop < 20) {
      this.setState({
        backgroundColor: "transparent"
      });
    } else {
      this.setState({ backgroundColor: "rgba(27, 27, 27, .7)" });
    }
  };
  render() {
    return (
      <Headroom>
        <nav
          className="main-nav dark"
          style={{
            backgroundColor: this.state.backgroundColor
          }}
        >
          <span
            className="navbar-brand"
            style={{ display: "flex", alignItems: "center", margin: "0 3rem" }}
          >
            <img style={{ height: 45 }} src={logo} alt="" />
          </span>
          <div
            className="full-wrapper relative clearfix"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div className="mobile-nav">
              <i className="fa fa-bars" />
            </div>
            {/* <!-- Main Menu --> */}
            <div className="inner-nav desktop-nav">
              <ul
                className="clearlist scroll-nav local-scroll"
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <li className="active">
                  <Link
                    to="home"
                    activeClass="activeScroll"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="skills"
                    activeClass="activeScroll"
                    spy={true}
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
                    activeClass="activeScroll"
                    spy={true}
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
                    activeClass="activeScroll"
                    spy={true}
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
                    activeClass="activeScroll"
                    spy={true}
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
                    <span className="btn btn-mod btn-circle">
                      <i className="fa fa-cloud-download" /> Download CV
                    </span>
                  </a>
                </li>
                {/* <!-- End Button --> */}
              </ul>
            </div>
          </div>
        </nav>
      </Headroom>
    );
  }
}
