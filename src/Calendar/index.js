import React, { Component } from 'react';
import { Calendar } from 'antd';
import './ca.css';
import 'antd/dist/antd.css';


class Calendar1 extends Component {
  render() {
    return (
        <Calendar onSelect={this.onSelect}/>
    );
  }
}

export default Calendar1;
