import React from "react";
import "../assets/css/careerdevs.css";
import CareerDevsClassroom from "../assets/images/CareerDevsClassroom.png";

export const CareerDevs = () => (
  <>
    <main>
      <div id="home" className="pad-section home"></div>

      <div id="about" className="pad-section">
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

      <div id="services" className="pad-section">
        <div className="container">
          <h2 className="text-center">My Projects</h2> <hr />
          <div className="row text-center">
            <div className="col-sm-3 col-xs-6">
              <a
                href="https://edwd42.github.io/NewportDataProject/"
                target="_blank"
              >
                <i className="fontawesomeicon fas fa-cloud"> </i>
                <h4>Leaflet App</h4>
              </a>
            </div>
            <div className="col-sm-3 col-xs-6">
              <a
                href="https://code-42.github.io/random_quote_machine/"
                target="_blank"
              >
                <i className="fontawesomeicon fas fa-atom"> </i>
                <h4>Random Quotes</h4>
              </a>
            </div>
            <div className="col-sm-3 col-xs-6">
              <a href="https://code-42.github.io/product_page/" target="_blank">
                <i className="fontawesomeicon fas fa-blender-phone"> </i>
                <h4>Product Page</h4>
              </a>
            </div>
            <div className="col-sm-3 col-xs-6">
              <a href="http://18.191.196.165/" target="_blank">
                <i className="fontawesomeicon fab fa-envira"> </i>
                <h4>Code Book</h4>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div id="information" className="pad-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title">
                    Teaching people powerful things.
                  </h2>
                </div>
                <div className="panel-body lead">
                  CareerDevs teaches its students a wide array of in-demand
                  skills including web development, software development,
                  algorithmic thinking and problem solving and soft skills. We
                  empower students to empower themselves and each other to
                  become skilled workers and thinkers who are adept across a
                  wide variety of technologies, working styles and problems.
                  CareerDevs enables workers to enter new jobs with the ability
                  to not just succeed, but thrive.
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h2 className="panel-title">
                    Learn in a supported, collaborative environment.
                  </h2>
                </div>
                <div className="panel-body lead"></div>
                CareerDevs classrooms start out teacher-led but become driven by
                students’ talents and interests as cohorts advance through the
                program. Students rely on each other to solve problems,
                inculcating a culture of self-learning and empowerment backed up
                by teachers who don’t tell you the answer to problems, but the
                answer about how to solve them.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <style></style>
  </>
);
