import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './HomePage/Nav0';
import Footer from './HomePage/Footer1';
import Home from './HomePage';
import flash from './Flashcard'
import Analysis from './Analysis'
import Calendar from "./Calendar";
import SelectionPage from './SelectionPage'
import SimpleMap from './Map'
import Foodie from './Foodie'
import Recipe from './Recipe'

import {
  Nav00DataSource,
  Footer10DataSource,
} from './HomePage/data.source.js';

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
          <Route exact path="/" component={Home} isMobile={this.isMobile}/>
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/selectionPage" component={SelectionPage} />
          <Route exact path="/flash" component={flash} />
          <Route exact path="/map" component={SimpleMap} />
          <Route exact path="/analysis" component={Analysis} />
          <Route exact path="/foodie" component={Foodie} />
          <Route exact path="/recipe" component={Recipe} />
          <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
