import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 600
    };
  }

  componentWillMount() {
    this.setState({
      height: document.body.offsetHeight
    });
  }

  render() {
    let { height } = this.state;
    return (
      <div className="menu" style={{ height }}>
        <div className="menu-header">
          <div>Cook at home</div>
          <img src="https://www.c-diversity.social/images/iter3/pic1.png" alt=""></img>
        </div>
        {/*  */}
        <div className="choose">
          <div className="choose-head">
            <h3>Choose a cuisine</h3>
            <select>
              <option>111111</option>
            </select>
          </div>
          <div className="choose-body"></div>
        </div>
      </div>
    );
  }
}

export default Menu;
