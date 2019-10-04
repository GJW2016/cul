import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css"

class Foodie extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  nextPage = () => {
    document.getElementById("scroll").scrollTop = 100000;
  };

  render() {
    return (
      <div id="scroll" className="scroll">
        <div onClick={this.nextPage} className="arrow-down">
          <div>keep scrolling to find a way to curb your hunger</div>
          <Icon type="arrow-down" style={{ }}></Icon>
        </div>
        <div className="title1">
          <div className="title1-context">
            <h3>Are you a Foodie?</h3>
            <p>
              Food is an integral part of people's lives, and is much more than just a means of survival. Coming to Melbourne, one might be easily become overwhelmed by the enormous choices of food.
              Luckily enough Melbourne is Australia's culinary capital and with 3,500 restaurants and serves up cuisines from more than 70 countries.  That is overwhelming, correct? Especially when
              you're new in the city and are inquisitive about the authentic Australian cuisine which sometime tends to get lost with the range of varied cuisines that has now become an integral part
              of Melbourne's food culture. Brace yourselves as you are in for a ride that will take you in for a journey of Australian food while embracing your home country's food culture.
            </p>
          </div>
        </div>
        <div className="title1 title2">
          <div className="title1-context">
            <h3>Are you a Foodie?</h3>
            <p>
              Food is an integral part of people's lives, and is much more than just a means of survival. Coming to Melbourne, one might be easily become overwhelmed by the enormous choices of food.
              Luckily enough Melbourne is Australia's culinary capital and with 3,500 restaurants and serves up cuisines from more than 70 countries.  That is overwhelming, correct? Especially when
              you're new in the city and are inquisitive about the authentic Australian cuisine which sometime tends to get lost with the range of varied cuisines that has now become an integral part
              of Melbourne's food culture. Brace yourselves as you are in for a ride that will take you in for a journey of Australian food while embracing your home country's food culture.
            </p>
          </div>
        </div>
      </div>
    );
  }


}

export default Foodie;