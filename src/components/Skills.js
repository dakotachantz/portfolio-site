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
                In my previous career as a leader in marketing, I learned to be
                empathetic to the consumer and my team, adaptable to
                everchanging goals, open to new ideas, and to approach each
                opportunity with a positive mindset. These experiences have made
                me a better developer - one who thrives on collaboration and
                always keeps the business' needs at the forefront of the
                solutions I create.
                <br />
                <br />Here are some tools I use currently to build things!
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
                <i className="devicon-amazonwebservices-plain devicon" />
                <i className="devicon-visualstudio-plain devicon" />
                <i className="devicon-webpack-plain devicon" />
                <i className="devicon-redis-plain devicon" />
                <i className="devicon-docker-plain devicon" />
                <i className="devicon-babel-plain devicon" />
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
