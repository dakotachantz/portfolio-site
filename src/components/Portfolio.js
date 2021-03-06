import React, { Component } from "react";

import basicsMockup from "../images/e-commerce-site.png";
import codeSnippetMockup from "../images/code-snippets.png";
import songShareMockup from "../images/song-share-app.png";
import homelessHelperMockup from "../images/homelesshelper.png";
import bentCreekMockup from "../images/bent-creek.png";
import itunesMusicPlayerMockup from "../images/itunes-music-player.png";

export default class Portfolio extends Component {
  render() {
    return (
      <span>
        <div
          id="portfolio"
          className="parallax"
          style={{
            backgroundImage: `url(${homelessHelperMockup})`,
            WebkitBackgroundImage: `url(${homelessHelperMockup})`,
            height: "100%",
            minHeight: "100vh",
            width: "100%",
            backgroundSize: "135%",
            backgroundPosition: "center",
            backgroundColor: "#39444d",
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
            <h2 className="section-title font-alt align-left mt-0 mb-70 mb-sm-40 portfolio-title">
              Portfolio
            </h2>
          </div>
          <div
            className="work-intro"
            style={{
              width: "50%",
              backgroundColor: "rgba(57, 68, 77, 0.7)",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h3 className="work-title" style={{ color: "#fff" }}>
              Homeless Helper
            </h3>
            <div className="work-descr" style={{ color: "#fff" }}>
              Built with React, Google Maps API, Open Data API, PostgreSQL,
              Bootstrap, and JavaScript.
            </div>
            <div className="workButtons">
              <a
                href="https://homelesshelper.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Live
              </a>
              <a
                href="https://github.com/dakotachantz/homeless-helper"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div
          id="portfolio"
          className="parallax"
          style={{
            backgroundImage: `url(${basicsMockup})`,
            WebkitBackgroundImage: `url(${basicsMockup})`,
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
              Built with JavaScript, React, and Bootstrap.
            </div>
            <div className="workButtons">
              <a
                href="http://back-to-basics.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Live
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
        <div
          className="parallax"
          style={{
            backgroundImage: `url(${itunesMusicPlayerMockup})`,
            WebkitBackgroundImage: `url(${itunesMusicPlayerMockup})`,
            height: "100%",
            minHeight: "100vh",
            width: "100%",
            backgroundSize: "135%",
            backgroundPosition: "center",
            backgroundColor: "#468495",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <div
            className="work-intro"
            style={{
              width: "50%",
              backgroundColor: "#468495b3",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h3 className="work-title" style={{ color: "#fff" }}>
              iTunes Music Player
            </h3>
            <div className="work-descr" style={{ color: "#fff" }}>
              Built with JavaScript, iTunes API, CSS and HTML.
            </div>
            <div className="workButtons">
              <a
                href="http://thesearchformusic.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Live
              </a>
              <a
                href="https://github.com/dakotachantz/itunes-music-search"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div
          className="parallax"
          style={{
            backgroundImage: `url(${bentCreekMockup})`,
            WebkitBackgroundImage: `url(${bentCreekMockup})`,
            height: "100%",
            minHeight: "100vh",
            width: "100%",
            backgroundSize: "135%",
            backgroundPosition: "center",
            backgroundColor: "#647D6A",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <div
            className="work-intro"
            style={{
              width: "50%",
              backgroundColor: "#647d6ab3",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <h3 className="work-title" style={{ color: "#fff" }}>
              Bent Creek Ceramics
            </h3>
            <div className="work-descr" style={{ color: "#fff" }}>
              Built with HTML, CSS, and JavaScript.
            </div>
            <div className="workButtons">
              <a
                href="http://bentcreekceramics.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Live
              </a>
              <a
                href="https://github.com/dakotachantz/week-one-project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Code
              </a>
            </div>
          </div>
        </div>
        <div
          className="parallax"
          style={{
            backgroundImage: `url(${codeSnippetMockup})`,
            WebkitBackgroundImage: `url(${codeSnippetMockup})`,
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
              Built with NodeJS, MongoDB, Mustache, HTML, CSS, JavaScript, and
              Express.
            </div>
            <div className="workButtons">
              <a
                href="http://codesnippetorganizer.xyz/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Live
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
            WebkitBackgroundImage: `url(${songShareMockup})`,
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
              Built with JavaScript, React, and Bootstrap.
            </div>
            <div className="workButtons">
              <a
                href="http://song-share.surge.sh/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-mod btn-medium"
              >
                Live
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
      </span>
    );
  }
}
