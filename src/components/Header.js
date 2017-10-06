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
          {/* <!-- Hero Content --> */}
          <div className="home-content">
            <div className="home-text">
              <div className="row mt-60 mt-xs-20">
                <div className="align-center pt-20 pt-lg-0">
                  <div className="hs-line-4 font-alt">Dakota Nichols</div>
                  <h1 className="hs-line-15 font-alt">Web Developer</h1>
                  <div className="section-text white text-justify">
                    <p>
                      <span className="dropcap font-alt">M</span>y name is
                      Dakota Nichols In&nbsp;maximus ligula lorem semper metus
                      pellentesque mattis.Maecenas volutpat, diam enim sagittis
                      quam, id&nbsp;porta quam. Sed id&nbsp;dolor consectetur
                      fermentum nibh volutpat, accumsan purus.
                    </p>
                    <p>
                      Phasellus consectetur vel nunc vitae tempus. Maecenas
                      commodo ipsum non est consequat euismod.Aenean sit amet
                      urna ac velit dapibus ullamcorper at ac ligula. Duis sed
                      laoreet leo. Morbi ac semper lorem ipsum tortor.
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
