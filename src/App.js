import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Nav0';
import Footer from './Home/Footer1';
import Home from './Home';
import select from './Selection';
import Country from './Country'
import Country1 from './Country1'
import Country2 from './Country2'
import Country3 from './Country3'
import Country4 from './Country4'
import Analysis from './Analysis'
import Calendar from "./Calendar";
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
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
          <Route exact path="/" component={Home} />
          <Route exact path="/calender" component={Calendar} />
          <Route exact path="/page2" component={select} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/country1" component={Country1} />
          <Route exact path="/country2" component={Country2} />
          <Route exact path="/country3" component={Country3} />
          <Route exact path="/country4" component={Country4} />
          <Route exact path="/analysis" component={Analysis} />
          <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
