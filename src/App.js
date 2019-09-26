import React, { Component } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <HashRouter basename="/">
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Me</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Me</Link>
                </li>
              </ul>
              <hr />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
          </HashRouter>
        </Layout>
      </>
    );
  }
}

export default App;
