import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import { NavBar } from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <HashRouter basename="/">
            <NavBar />
            <div>
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
