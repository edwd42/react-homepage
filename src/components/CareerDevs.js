import React from "react";
import "../assets/css/careerdevs.css";
import CareerDevsClassroom from "../assets/images/CareerDevsClassroom.png";
import CareerDevsCohortOnRoofTop from "../assets/images/CareerDevsCohortOnRoofTop.jpg";
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
                <img src={CDIntroductionCertfiicate} alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="certs">
                <img src={CDIntermediateCertfiicate} alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="certs">
                <img src={CDAdvancedCertificate} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="about pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <img src={CareerDevsClassroom} alt="" />
            </div>
            <div className="col-sm-6 text-left">
              <h2>CareerDevs Classroom</h2>
              <p className="text-left">This is where genius happens.</p>
              <p>
                CareerDevs is a year-long, full-stack program for students
                looking to kickstart their careers in computer science. We are
                committed to the belief that an education worth our students
                time is one that teaches students the powerful skills needed to
                thrive in today’s economy without incurring the crushing student
                debts affecting Americans today.
              </p>
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

      {/* <div id="information" className="about pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title"></h2>
                </div>
                <div className="panel-body lead certs"></div>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title"></h2>
                </div>
                <div className="panel-body lead"></div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title"></h2>
                </div>
                <div className="panel-body lead"></div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


    </main>
  </>
);
