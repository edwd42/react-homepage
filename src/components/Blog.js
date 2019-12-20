// import tower from "../assets/images/360px-Hannah_Robinson_Tower_RI.jpg";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/blog.css";

export const Blog = () => (
  <Container>
    <Row className="justify-content-md-center" style={{ margin: 40 }}>
      <Col md-2>
        <Row>
          <a
            title="Raime [CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0)], via Wikimedia Commons"
            href="https://commons.wikimedia.org/wiki/File:Hannah_Robinson_Tower_RI.jpg"
          >
            <img
              width="200%"
              alt="Hannah Robinson Tower RI"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hannah_Robinson_Tower_RI.jpg/256px-Hannah_Robinson_Tower_RI.jpg"
            />
          </a>
        </Row>
        <Row>
          <span>
            Raime [
            <a href="https://creativecommons.org/licenses/by-sa/3.0">
              CC BY-SA 3.0
            </a>
            ],{" "}
            <a href="https://commons.wikimedia.org/wiki/File:Hannah_Robinson_Tower_RI.jpg">
              via Wikimedia Commons
            </a>
          </span>
          <span>
            This observation tower is located in North Kingstown, RI. As a
            child, I would climb this tower every time my family went to the
            beaches in Narragansett, RI
          </span>
        </Row>
      </Col>
      <Col md-10 id="blog-intro">
        <h2>Observation Post</h2>
        <p>
          This is my blog, where I write about my observations as I learn
          coding. This is my blog, where I write about my observations as I
          learn coding. This is my blog, where I write about my observations as
          I learn coding. This is my blog, where I write about my observations
          as I learn coding. This is my blog, where I write about my
          observations as I learn coding. This is my blog, where I write about
          my observations as I learn coding. This is my blog, where I write
          about my observations as I learn coding. This is my blog, where I
          write about my observations as I learn coding. This is my blog, where
          I write about my observations as I learn coding. This is my blog,
          where I write about my observations as I learn coding. This is my
          blog, where I write about my observations as I learn coding. This is
          my blog, where I write about my observations as I learn coding. This
          is my blog, where I write about my observations as I learn coding.
          This is my blog, where I write about my observations as I learn
          coding. This is my blog, where I write about my observations as I
          learn coding. This is my blog, where I write about my observations as
          I learn coding. This is my blog, where I write about my observations
          as I learn coding. This is my blog, where I write about my
          observations as I learn coding.
        </p>
      </Col>
    </Row>
  </Container>
);
