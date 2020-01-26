import React from "react";
import "../assets/css/careerdevs.css";
import CareerDevsClassroom from "../assets/images/CareerDevsClassroom.png";
import CareerDevsCohortOnRoofTop from "../assets/images/CareerDevsCohortOnRoofTop.jpg";
import NASDAQapp from "../assets/images/CDImages/NASDAQapp.png";
import NewsLogos from "../assets/images/CDImages/NewsLogos.png";
import this_is_git from "../assets/images/CDImages/this_is_git.png";
import CDAdvancedCertificate from "../assets/images/CD_certificates/CDAdvancedCertificate.png";
import CDIntermediateCertfiicate from "../assets/images/CD_certificates/CDIntermediateCertfiicate.jpg";
import CDIntroductionCertfiicate from "../assets/images/CD_certificates/CDIntroductionCertfiicate.jpg";

export const CareerDevs = () => (
  <>
    <main>
      <div id="home" className="home pad-section">
        <div className="certificates">
          <div className="row">
            <div className="col-sm-4">
              <div className="certs">
                <img
                  src={CDIntroductionCertfiicate}
                  alt="CDIntroductionCertfiicate"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="certs">
                <img
                  src={CDIntermediateCertfiicate}
                  alt="CDIntermediateCertfiicate"
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="certs">
                <img src={CDAdvancedCertificate} alt="CDAdvancedCertificate" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 text-right">
              <h2>CareerDevs Classroom</h2>
              <p className="text-right">This is where genius happens.</p>
              <p>
                CareerDevs is a year-long, full-stack program for students
                looking to kickstart their careers in computer science. We are
                committed to the belief that an education worth our students
                time is one that teaches students the powerful skills needed to
                thrive in today’s economy without incurring the crushing student
                debts affecting Americans today.
                <br />
                <small>- Arnell Milhouse, Executive Director</small>
              </p>
            </div>
            <div className="col-sm-6">
              <img src={CareerDevsClassroom} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="pad-section">
        <div className="container">
          <img src={CareerDevsCohortOnRoofTop} alt="" />
        </div>
      </div>

      <div id="services" className="pad-section">
        <div className="container">
          <h2 className="text-center">My Projects</h2> <hr />
          <div className="row text-center">
            <div className="col-sm-3 col-xs-6">
              <a
                href="https://edwd42.github.io/NewportDataProject/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fontawesomeicon fas fa-cloud"> </i>
                <h4>Leaflet App</h4>
              </a>
            </div>
            <div className="col-sm-3 col-xs-6">
              <a
                href="https://code-42.github.io/random_quote_machine/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fontawesomeicon fas fa-atom"> </i>
                <h4>Random Quotes</h4>
              </a>
            </div>
            <div className="col-sm-3 col-xs-6">
              <a
                href="https://code-42.github.io/product_page/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fontawesomeicon fas fa-blender-phone"> </i>
                <h4>Product Page</h4>
              </a>
            </div>
            <div className="col-sm-3 col-xs-6">
              <a
                href="http://18.191.196.165/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fontawesomeicon fab fa-envira"> </i>
                <h4>Code Book</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div
                id="carouselExampleControls"
                className="carousel slide carousel-container"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={NewsLogos}
                      className="d-block w-100"
                      alt="NewsLogos"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={NASDAQapp}
                      className="d-block w-100"
                      alt="NASDAQapp"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={this_is_git}
                      className="d-block w-100"
                      alt="this_is_git"
                    />
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div className="col-sm-4 text-left">
              <h2>My Projects</h2>
              <p className="text-left">
                At CareerDevs, students are tasked with a variety of projects.
                Here is a carousel of screenshots from some of my projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <br />
        <br />
        <br />
      </div>
    </main>
    <div>
      <footer>
        <p id="footer">
          &copy; 2020 Edward Dupre &middot;{" "}
          <a href="https://edwd42.com">Back to My Portfolio</a> &middot;{" "}
          <a
            href="https://github.com/edwd42/react-homepage"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github Repo
          </a>
        </p>
      </footer>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  </>
);
