import React, { Component } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Me</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="*" component={() => "404 NOT FOUND"} /> */}
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);
const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default App;
