import React, { Component } from "react";
import headerImg from "../images/header-img.jpg";
import reactScroll from "react-scroll";
var Link = reactScroll.Link;

export default class Header extends Component {
  render() {
    return (
      <section
        className="page-section bg-dark bg-dark-alfa-70"
        id="home"
        style={{ backgroundImage: `url(${headerImg})`, minHeight: "100vh" }}
      >
        <div className="relative container">
          <div className="home-content">
            <div className="home-text">
              <div className="row mt-60 mt-xs-20">
                <div className="align-center pt-20 pt-lg-0">
                  <div className="hs-line-4 font-alt">Dakota Nichols</div>
                  <h1 className="hs-line-15 font-alt">Application Developer</h1>
                  <div className="section-text white text-justify">
                    <p>
                      <span className="dropcap font-alt">M</span>y name is
                      Dakota Nichols. I am an Application Developer. Which is
                      just a fancy way of saying I run on coffee, creativity,
                      and now I get to solve the world's business problems with
                      code everyday. I made a shift into software development
                      for a career that would challenge me, and provide an
                      outlet for continued growth.
                    </p>
                    <p>
                      I enjoy beautiful design, clean functional code, long
                      walks on the beach, hip hop dancing, good people, and
                      great food.
                    </p>
                    <hr className="white" />
                    <section className="scrollArrow">
                      <Link
                        to="skills"
                        activeClass="activeScroll"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <span className="fa fa-angledown" />
                      </Link>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
