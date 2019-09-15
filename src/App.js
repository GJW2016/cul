import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Nav0';
import Footer from './Home/Footer1';
import Home from './Home';
import flash from './Flashcard'
import Analysis from './Analysis'
import Calendar from "./Calendar";
import SelectionPage from './SelectionPage'

import {
  Nav00DataSource,
  Footer10DataSource,
} from './Home/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // adapting mobile screen;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  //setting router of the website
  render() {
    return (
      <Router>
        <div>
          <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
          <Route exact path="/" component={Home} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/selectionPage" component={SelectionPage} />
          <Route exact path="/flash" component={flash} />
          <Route exact path="/analysis" component={Analysis} />
          <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
