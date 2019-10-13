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
      height: document.body.offsetHeight
    });
    document.body.scrollIntoView(1);
  }
  nextPage = () => {
    document.body.scrollTop = 2000;
  };
  onLeftClick = () => {
    this.props.history.push("/recipe");
  };
  onRightClick = () => {
    this.props.history.push("/map");
  };
  render() {
    const {height} = this.state;
    return (
      <div id="scroll" className="home1">
        <div onClick={this.nextPage} className="arrow-down">
          <div>keep scrolling to find a way to curb your hunger</div>
          <Icon type="arrow-down" style={{ fontSize: 20, color: "#fff" }}></Icon>
        </div>
        <div className="title1" style={{height:height}}>
          <div className="title1-context">
            <h3>Are you a Foodie?</h3>
            <p>
              <br/>-Coming to Melbourne, one might be easily become overwhelmed by the enormous choices of food.
              <br/><br/>-Luckily enough Melbourne is Australia's culinary capital and with 3,500 restaurants and serves up cuisines from more than 70 countries.
              <br/><br/>-That is overwhelming, correct?
              <br/><br/>-Brace yourselves as you are in for a ride that will take you in for a journey of Australian food while embracing your home country's food culture.
            </p>
          </div>
        </div>
        <div className="title1 title2" style={{height:969}}>
          <div className="title1-context" style={{ left : 20, top:50, height:600, width:"40%", bottom: 'auto',marginTop: 50}}>
            <p style={{marginTop:30}}>
            <br/>-Since food can be a crucial means of communication, it also can be found that most young generation in Melbourne often socialize over food in restaurants of varied cuisines.
            <br/><br/>-Thus we take the initiative to make food easily accessible and not a financial burden on the international students by offering two options that will ease making the meal choices everyday.
            </p>
          </div>
        </div>
        <div className="select">
          <div style={{marginRight: 90, textAlign: "right"}}>
            <img width="200" height="200"  src="https://www.c-diversity.social/images/iter3/chat.PNG" alt=""></img>
          </div>
          <h3>Being new to Melbourne, it gets difficult to find the food that matches the taste of one's home country. So here is your two options to fill up your stomach!</h3>
          <h2>Make your choice</h2>
          <div className="flex-block">
            <div className="slect-item" onClick={this.onLeftClick}>
              <h4>Cook at home</h4>
              <img width="300" height="300" src="https://www.c-diversity.social/images/iter3/food.jpg" alt=""></img>
            </div>
            <span>OR</span>
            <div className="slect-item" onClick={this.onRightClick}>
              <h4>Find a budget friendly restaurant</h4>
              <img width="300" height="300" src="https://www.c-diversity.social/images/iter3/restaurant.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    );
  }


}

export default Foodie;