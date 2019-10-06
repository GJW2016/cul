import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css"

class Foodie extends Component{
  constructor(props) {
    super(props);
    this.state = {
        height:500
    };
  }

  componentWillMount() {
    this.setState({
      height: window.screen.height
    })
  }
  nextPage = () => {
    document.getElementById("scroll").scrollTop = 100000;
  };

  render() {
    const {height} = this.state
    return (
      <div id="scroll" className="home">
        <div onClick={this.nextPage} className="arrow-down">
          <div>keep scrolling to find a way to curb your hunger</div>
          <Icon type="arrow-down" style={{ fontSize: 20, color: "#fff" }}></Icon>
        </div>
        <div className="title1" style={{height:height}}>
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
        <div className="title1 title2" style={{height:height}}>
          <div className="title1-context" style={{ left : 30 }}>
            <h3>Are you a Foodie?</h3>
            <p>
              Food is an integral part of people's lives, and is much more than just a means of survival. Coming to Melbourne, one might be easily become overwhelmed by the enormous choices of food.
              Luckily enough Melbourne is Australia's culinary capital and with 3,500 restaurants and serves up cuisines from more than 70 countries.  That is overwhelming, correct? Especially when
              you're new in the city and are inquisitive about the authentic Australian cuisine which sometime tends to get lost with the range of varied cuisines that has now become an integral part
              of Melbourne's food culture. Brace yourselves as you are in for a ride that will take you in for a journey of Australian food while embracing your home country's food culture.
            </p>
          </div>
        </div>
        <div className="select" style={{height:height}}>
          <h3>title</h3>
          <h2>Make your choice</h2>
          <div className="flex-block">
            <div className="slect-item">
              <h4>Cook at home</h4>
              <img src="https://www.culturallydiversity.tk/images/iter3/food.jpg" alt=""></img>
            </div>
            <span>OR</span>
            <div className="slect-item">
              <h4>Find a budget friendly restaurant</h4>
              <img src="https://www.culturallydiversity.tk/images/iter3/restaurant.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default Foodie;