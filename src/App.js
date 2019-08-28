import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header from './Home/Nav0';
import Footer from './Home/Footer1';
import Home from './Home';
import Home1 from './Selection';
import Country from './Country'
import Analysis from './Analysis'
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
          <Route exact path="/page2" component={Home1} />
          <Route exact path="/country" component={Country} />
          <Route exact path="/analysis" component={Analysis} />
          <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
