import React, { Component } from 'react';
import { Calendar } from 'antd';
import './ca.css';
import 'antd/dist/antd.css';
import {dateCellRender,monthCellRender} from './ca'

class Calendar1 extends Component {
  render() {
    return (
        <Calendar CellRender={dateCellRender}
                  monthCellRender={monthCellRender}
                  onSelect={this.onSelect}/>
    );
  }
}

export default Calendar1;
