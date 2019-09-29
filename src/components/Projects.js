import React from "react";
import { Card, CardColumns, Container } from "react-bootstrap";
import "../assets/css/projects.css";

export const Projects = () => (
  <Container>
    <h1>Projects Showcase</h1>
    <CardColumns>
      <Card>
        <Card.Img src="./images/content-scraping.png" />
        <Card.Body>
          <Card.Title>Java Web Scraper</Card.Title>{" "}
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link>
            <a
              href="https://github.com/edwd42/scraper_view"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&nbsp;Repo
            </a>
          </Card.Link>
          <Card.Link>
            <a
              href="http://yahoo-scraper.s3-website-us-east-1.amazonaws.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live&nbsp;Demo
            </a>
          </Card.Link>
        </Card.Footer>
      </Card>
      {/* <Card className="p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card> */}
      <Card>
        <Card.Img variant="top" src="./images/NDP_screenshot.png" />
        <Card.Body>
          <Card.Title>Leaflet Data Overlays</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link>
            <a
              href="https://github.com/edwd42/NewportDataProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub&nbsp;Repo
            </a>
          </Card.Link>
          <Card.Link>
            <a
              href="https://edwd42.github.io/NewportDataProject/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live&nbsp;Demo
            </a>
          </Card.Link>
        </Card.Footer>
      </Card>
      <Card bg="primary" text="white" className="text-center p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card>
      {/*<Card>
        <Card.Img src="holder.js/100px160" />
      </Card>
      <Card className="text-right">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </small>
          </footer>
        </blockquote>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Card.Text>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
      </Card> */}
    </CardColumns>
  </Container>
);
