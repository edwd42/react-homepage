import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";

function getQuote() {
  let url =
    "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  // var resultElement = document.getElementById("getResult1");
  // resultElement.innerHTML = "";

  axios
    .get(url)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

getQuote();

const RandomQuoteMachine = () => (
  <Container>
    <h1>Random Quote Machine</h1>
  </Container>
);

export default RandomQuoteMachine;
