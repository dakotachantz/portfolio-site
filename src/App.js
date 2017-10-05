import React, { Component } from "react";
import "./css/style.css";
import headerImg from "./images/header-img.jpg";
import basicsMockup from "./images/e-commerce-site.png";
import codeSnippetMockup from "./images/code-snippets.png";
import songShareMockup from "./images/song-share-app.png";

class App extends Component {
  render() {
    return (
      <div className="appear-animate">
        {/* <!-- Page Loader -->         */}
        {/* <div className="page-loader">
          <div className="loader">Loading...</div>
        </div> */}
        {/* <!-- End Page Loader --> */}

        {/* <!-- Page Wrap --> */}
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed">
            <div
              className="full-wrapper relative clearfix"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              {/* <!-- Logo ( * your text or image into link tag *) --> */}
              <div className="nav-logo-wrap local-scroll">
                <a href="#top" className="logo">
                  <img src="images/logo-white.png" alt="" />
                </a>
              </div>
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
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#skills">Skills</a>
                  </li>
                  <li>
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="#experience">Experience</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>

                  {/* <!-- Button --> */}
                  <li>
                    <a href="" target="_blank">
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
                    <div className="align-center pt-20 pt-lg-0 mb-xs-30">
                      <div className="hs-line-4 font-alt mb-20">
                        Dakota Nichols
                      </div>
                      <h1 className="hs-line-15 font-alt mb-40 mb-xs-20">
                        Web Developer
                      </h1>
                      <div className="section-text white mb-70 mb-xs-40 text-justify">
                        <p>
                          <span className="dropcap font-alt">M</span>y name is
                          Dakota Nichols In&nbsp;maximus ligula lorem semper
                          metus pellentesque mattis.Maecenas volutpat, diam enim
                          sagittis quam, id&nbsp;porta quam. Sed id&nbsp;dolor
                          consectetur fermentum nibh volutpat, accumsan purus.
                        </p>
                        <p>
                          Phasellus consectetur vel nunc vitae tempus. Maecenas
                          commodo ipsum non est consequat euismod.Aenean sit
                          amet urna ac velit dapibus ullamcorper at ac ligula.
                          Duis sed laoreet leo. Morbi ac semper lorem ipsum
                          tortor.
                        </p>
                        <hr className="white mb-30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Home Section -->
            
            
            <!-- Skills Section --> */}
          <section className="page-section" id="skills" style={{minHeight: '100vh'}}>
            <div className="container relative">
              <div className="row">
                <div className="col-sm-3">
                  <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">
                    Skills
                  </h2>
                </div>

                <div className="col-sm-9">
                  <div className="section-text mb-50 mb-xs-30">
                    Larensy in&nbsp;auctor ex&nbsp;id&nbsp;urna faucibus
                    porttitor. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. In&nbsp;maximus ligula semper metus
                    pellentesque mattis. Maecenas volutpat, diam enim sagittis
                    quam, id&nbsp;porta quam. Sed id&nbsp;dolor consectetur
                    fermentum nibh volutpat, accumsan purus.
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
          </section>
          {/* <!-- End Skills Section --> */}

          {/* <!-- Divider --> */}
          <hr className="mt-0 mb-0 " />
          {/* <!-- End Divider -->

             {/* <!-- Divider --> */}
          {/* <!-- End Divider --> */}

          {/* <!-- Portfolio Section --> */}
          <div
            id="portfolio"
            className="parallax"
            style={{
              backgroundImage: `url(${basicsMockup})`,
              height: "100%",
              minHeight: "100vh",
              width: "100%",
              backgroundSize: "135%",
              backgroundPosition: "center",
              backgroundColor: "#333",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div
              className="work-intro"
              style={{
                width: "50%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                flexDirection: "column"
              }}
            >
              <h2
                className="section-title font-alt align-left mt-0 mb-70 mb-sm-40"
                style={{ color: "#fff", padding: "100px 60px" }}
              >
                Portfolio
              </h2>
            </div>
            <div
              className="work-intro"
              style={{
                width: "50%",
                backgroundColor: "rgba(51, 51, 51, 0.7)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <h3 className="work-title" style={{ color: "#fff" }}>
                Basics
              </h3>
              <div className="work-descr" style={{ color: "#fff" }}>
                Mock E-commerce Site. Built with love, React, and Bootstrap.
              </div>
              <div className="workButtons">
                <a
                  href="http://back-to-basics.surge.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-medium"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/dakotachantz/e-commerce-site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          {/* end of portfolio item #1 */}
          <div
            className="parallax"
            style={{
              backgroundImage: `url(${codeSnippetMockup})`,
              height: "100%",
              minHeight: "100vh",
              width: "100%",
              backgroundSize: "135%",
              backgroundPosition: "center",
              backgroundColor: "#009ed8",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div
              className="work-intro"
              style={{
                width: "50%",
                backgroundColor: "rgba(0, 115, 157, .7)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <h3 className="work-title" style={{ color: "#fff" }}>
                Code Snippets
              </h3>
              <div className="work-descr" style={{ color: "#fff" }}>
                Built with NodeJS, MongoDB, Mustache, and Express.
              </div>
              <div className="workButtons">
                <a
                  href="http://codesnippetorganizer.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-medium"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/dakotachantz/code-snippet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          {/* end of portolio item #2 */}
          <div
            className="parallax"
            style={{
              backgroundImage: `url(${songShareMockup})`,
              height: "100%",
              minHeight: "100vh",
              width: "100%",
              backgroundSize: "135%",
              backgroundPosition: "center",
              backgroundColor: "#f91e56",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <div
              className="work-intro"
              style={{
                width: "50%",
                backgroundColor: "rgba(211, 25, 72, .7)",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <h3 className="work-title" style={{ color: "#fff" }}>
                Song Share App
              </h3>
              <div className="work-descr" style={{ color: "#fff" }}>
                Built with NodeJS, MongoDB, Mustache, and Express.
              </div>
              <div className="workButtons">
                <a
                  href="http://song-share.surge.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-medium"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/dakotachantz/song-share-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-mod btn-medium"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
          {/* end of portfolio items */}
          {/* <!-- experience Section --> */}
          <section className="page-section" id="experience">
            <div className="container relative">
              <div className="row">
                {/* <!-- Section Title --> */}
                <div className="col-sm-3">
                  <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">
                    experience
                  </h2>
                </div>
                {/* <!-- End Section Title -->
                        
                        <!-- Section Content --> */}
                <div className="col-sm-9">
                  <div className="section-text">
                    <div className="row">
                      <div className="col-md-2 black">
                        Jul 17 &ndash; Oct 17
                      </div>
                      <div className="col-md-10">
                        <h4 className="mt-0 mb-0">
                          Full Stack Fundamentals w/React Specialization
                        </h4>
                        Rigorous 12-week full stack fundamentals coding bootcamp
                        specializing in highly focused, immersive training
                        centered on language fluency, object-oriented
                        programming, and project-based learning. Specialization
                        in React framework.
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-md-2 black">
                        Oct 15 &ndash; Jul 17{" "}
                      </div>
                      <div className="col-md-10">
                        <h4 className="mt-0 mb-0">
                          In House Marketing Supervisor
                        </h4>
                        Led a team of 24 in house marketers to exceed budgeted
                        leads at site level.
                        <br /> Launched Online Manifest (OLM) with corporate
                        development team; a web application used to book
                        prospective leads for the sales department.
                        <br />
                        Created training guides for OLM and new onboarding
                        training for the local site.
                        <br />
                        Developed new marketing strategies and evaluated
                        incoming arrival flow with sales partners and regional
                        training team to write action plans to exceed specific
                        objectives. <br />
                        Instill a culture of success by engaging peer to peer
                        empowerment and mentality of “1 Team 1 Dream”
                      </div>
                    </div>

                    <hr />

                    <div className="row">
                      <div className="col-md-2 black">
                        May 15 &ndash; Oct 15
                      </div>
                      <div className="col-md-10">
                        <h4 className="mt-0 mb-0">Solutions Specialist</h4>
                      Engage customers to build customized solutions in a dynamic environment.<br/> Accumulate and apply appropriate knowledge and expertise through self-development and continuous learning.<br/> Utilize sales expertise, passion for Verizon technology and customer interaction skills.
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Section Content --> */}
              </div>
            </div>
          </section>
          {/* <!-- End experience Section -->
            
            
            <!-- Section --> */}

          <hr className="mt-0 mb-0 " />
          {/* <!-- End Divider --> */}

          {/* <!-- Contact Section --> */}
          <section className="page-section" id="contact" style={{minHeight: '90vh'}}>
            <div className="container relative">
              <div className="row">
                <div className="col-sm-3">
                  <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40">
                    Contact
                  </h2>
                </div>

                <div className="col-sm-9">
                  <div className="section-text mb-70 mb-xs-40">
                    Curabitur eu adipiscing lacus, a iaculis diam. Nullam
                    placerat blandit auctor. Nulla accumsan ipsum et nibh
                    rhoncus, eget tempus sapien ultricies. Donec mollis lorem
                    vehicula.
                  </div>

                  <div className="row" style={{ marginTop: "2em" }}>
                    <div className="col-sm-5 mb-sm-60">
                      {/* <!-- Phone --> */}
                      <div className="contact-item mb-30">
                        <div className="ci-icon">
                          <i className="fa fa-phone" />
                        </div>
                        <div className="ci-title font-alt">Phone</div>
                        <div className="ci-text">615-415-1709</div>
                      </div>
                      {/* <!-- End Phone --> */}

                      <hr className="mb-30" />

                      <div className="contact-item mb-30">
                        <div className="ci-icon">
                          <i className="fa fa-github" />
                        </div>
                        <div className="ci-title font-alt">Github</div>
                        <div className="ci-text">
                          <a
                            href="https://github.com/dakotachantz"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            github.com/dakotachantz
                          </a>
                        </div>
                      </div>
                      <hr className="mb-30" />
                    </div>
                    <div className="col-sm-5 mb-sm-60">
                      <div className="contact-item mb-30">
                        <div className="ci-icon">
                          <i className="fa fa-envelope" />
                        </div>
                        <div className="ci-title font-alt">Email</div>
                        <div className="ci-text">
                          <a href="mailto:dakotachantz@gmail.com">
                            dakotachantz@gmail.com
                          </a>
                        </div>
                      </div>
                      <hr className="mb-30" />
                      <div className="contact-item mb-30">
                        <div className="ci-icon">
                          <i className="fa fa-linkedin" />
                        </div>
                        <div className="ci-title font-alt">LinkedIn</div>
                        <div className="ci-text">
                          <a
                            href="https://www.linkedin.com/in/dakotachantz/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            linkedin.com/in/dakotachantz
                          </a>
                        </div>
                      </div>
                      <hr className="mb-30" />
                    </div>
                    {/* <!-- End Email --> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- End Contact Section --> */}

          {/* <!-- Foter --> */}
          <footer
            className="page-section bg-gray-lighter footer"
            style={{ padding: "2em" }}
          >
            <div className="container">
              <div className="footer-text">
                <div className="footer-copy font-alt">
                  &copy; Dakota Nichols 2017.
                </div>
              </div>
            </div>

            {/* <!-- Top Link --> */}
            <div className="local-scroll">
              <a href="#top" className="link-to-top">
                <i className="fa fa-caret-up" />
              </a>
            </div>
            {/* <!-- End Top Link --> */}
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
