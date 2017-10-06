import React, { Component } from "react";
import reactScroll from "react-scroll";
var Link = reactScroll.Link;
export default class Experience extends Component {
  render() {
    return (
      <section className="page-section" id="experience">
        <div className="container relative">
          <div className="row">
            <div className="col-sm-3">
              <h2 className="section-title font-alt align-left mt-0">
                experience
              </h2>
            </div>
            <br />
            <div className="col-sm-9">
              <div className="section-text">
                <div className="row">
                  <div className="col-md-2 black">Jul 17 &ndash; Oct 17</div>
                  <div className="col-md-10">
                    <h4 className="mt-0">
                      Full Stack Fundamentals w/React Specialization
                    </h4>
                    Rigorous 12-week full stack fundamentals coding bootcamp
                    specializing in highly focused, immersive training centered
                    on language fluency, object-oriented programming, and
                    project-based learning. Specialization in React framework.
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-md-2 black">Oct 15 &ndash; Jul 17 </div>
                  <div className="col-md-10">
                    <h4 className="mt-0">In House Marketing Supervisor</h4>
                    Led a team of 24 in house marketers to exceed budgeted leads
                    at site level.
                    <br /> Launched Online Manifest (OLM) with corporate
                    development team; a web application used to book prospective
                    leads for the sales department.
                    <br />
                    Created training guides for OLM and new onboarding training
                    for the local site.
                    <br />
                    Developed new marketing strategies and evaluated incoming
                    arrival flow with sales partners and regional training team
                    to write action plans to exceed specific objectives. <br />
                    Instill a culture of success by engaging peer to peer
                    empowerment and mentality of “1 Team 1 Dream”
                  </div>
                </div>

                <hr />

                <div className="row">
                  <div className="col-md-2 black">May 15 &ndash; Oct 15</div>
                  <div className="col-md-10">
                    <h4 className="mt-0">Solutions Specialist</h4>
                    Engage customers to build customized solutions in a dynamic
                    environment.<br /> Accumulate and apply appropriate
                    knowledge and expertise through self-development and
                    continuous learning.<br /> Utilize sales expertise, passion
                    for Verizon technology and customer interaction skills.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="scrollArrow">
          <Link
            to="contact"
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
