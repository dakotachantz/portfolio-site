import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section
        className="page-section"
        id="contact"
        style={{ minHeight: "90vh" }}
      >
        <div className="container relative">
          <div className="row">
            <div className="col-sm-3">
              <h2 className="section-title font-alt align-left mt-0">
                Contact
              </h2>
            </div>

            <div className="col-sm-9">
              <div className="section-text">
                Curabitur eu adipiscing lacus, a iaculis diam. Nullam placerat
                blandit auctor. Nulla accumsan ipsum et nibh rhoncus, eget
                tempus sapien ultricies. Donec mollis lorem vehicula.
              </div>

              <div className="row" style={{ marginTop: "2em" }}>
                <div className="col-sm-5">
                  {/* <!-- Phone --> */}
                  <div className="contact-item">
                    <div className="ci-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="ci-title font-alt">Phone</div>
                    <div className="ci-text">
                      {" "}
                      <a href="tel:6154151709">615-415-1709</a>
                    </div>
                  </div>
                  {/* <!-- End Phone --> */}

                  <hr />

                  <div className="contact-item">
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
                  <hr />
                </div>
                <div className="col-sm-5">
                  <div className="contact-item">
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
                  <hr />
                  <div className="contact-item">
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
                  <hr />
                </div>
                {/* <!-- End Email --> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
