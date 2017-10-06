import React, { Component } from "react";
import reactScroll from "react-scroll";
var Link = reactScroll.Link;
export default class Skills extends Component {
  render() {
    return (
      <section
        className="page-section"
        id="skills"
        style={{ minHeight: "100vh" }}
      >
        <div className="container relative">
          <div className="row">
            <div className="col-sm-3">
              <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">
                Skills
              </h2>
            </div>

            <div className="col-sm-9">
              <div className="section-text mb-50 mb-xs-30">
                Larensy in&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus porttitor.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In&nbsp;maximus ligula semper metus pellentesque mattis.
                Maecenas volutpat, diam enim sagittis quam, id&nbsp;porta quam.
                Sed id&nbsp;dolor consectetur fermentum nibh volutpat, accumsan
                purus.
              </div>

              <div className="row skill-list">
                <i className="devicon-javascript-plain devicon" />
                <i className="devicon-react-original devicon" />
                <i className="devicon-nodejs-plain devicon" />
                <i className="devicon-express-original devicon" />
                <i className="devicon-bootstrap-plain devicon" />
                <i className="devicon-html5-plain devicon" />
                <i className="devicon-css3-plain devicon" />
                <i className="devicon-git-plain devicon" />
                <i className="devicon-github-plain devicon" />
                <i className="devicon-mongodb-plain devicon" />
                <i className="devicon-postgresql-plain devicon" />
                <i className="devicon-sequelize-plain devicon" />
              </div>
            </div>
          </div>
        </div>
        <section className="scrollArrow">
          <Link
            to="portfolio"
            activeClass="activeScroll"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <span
              className="fa fa-angledown"
              style={{
                borderBottom: "2px solid",
                borderLeft: "2px solid"
              }}
            />
          </Link>
        </section>
      </section>
    );
  }
}
