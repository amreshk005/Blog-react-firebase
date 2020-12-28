import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import FrontPage from "./components/FrontPage/FrontPage";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import WorkPage from "./components/WorkPage/WorkPage";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
    };
  }

  handleCheckbox = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };
  render() {
    return (
      <div className={"container" + (this.state.checkbox ? " container-dark" : " container-light")}>
        <Navbar status={this.state.checkbox} handleChange={this.handleCheckbox} />
        <Switch>
          <Route path="/" exact render={() => <FrontPage />} />
          <Route path="/blog" exact render={() => <Blog />} />
          <Route path="/work" render={() => <WorkPage />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/contact" render={() => <Contact status={this.state.checkbox} />} />
        </Switch>
        <Footer status={this.state.checkbox} />
      </div>
    );
  }
}

export default App;
