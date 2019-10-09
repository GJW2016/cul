import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css"
import Header from "../HomePage/Nav0";
import Footer from "../HomePage/Footer1";
import { Nav00DataSource, Footer10DataSource } from "../HomePage/data.source.js";

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
    })
  }
  nextPage = () => {
    document.getElementById("scroll").scrollTop = 100000;
  };
  onLeftClick = () => {
    this.props.history.push("/recipe");
  };
  render() {
    const {height} = this.state
    return (
      <div id="scroll" className="home1">
        <Header dataSource={Nav00DataSource} isMobile={this.isMobile} />
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
          <div className="title1-context" style={{ left : 0,top:50, height:700, bottom: 'auto' }}>
            <p>
            Since Melbourne is a multicultural city, the culture of food also indicates this characteristic. Which means restaurants with different cultural backgrounds could locate in several major commercial streets and shopping center. On the other hand, since some habitats with same cultural background tend to live in the same district in Melbourne, restaurants from these countries will also located in these districts.
            Moreover, in some home parties or community activities, home-made food from different countries can also be one necessary part. In these activities, people can just enjoy different styles of food, which is a integral part in everyone’s daily life.
            Since food can be a crucial means of communication, it also can be found that most young generation in Melbourne often socialize over food in restaurants of varied cuisines. Thus we take the initiative to make food easily accessible and not a financial burden on the international students by offering two options that will ease making the meal choices everyday.
            </p>
          </div>
        </div>
        <div className="select" style={{height:height}}>
          <h3>Being new to Melbourne, it gets difficult to find the food that matches the taste of one's home country. So here is your two options to fill up your stomach!</h3>
          <h2>Make your choice</h2>
          <div className="flex-block">
            <div className="slect-item" onClick={this.onLeftClick}>
              <h4>Cook at home</h4>
              <img width="300" height="300" src="https://www.c-diversity.social/images/iter3/food.jpg" alt=""></img>
            </div>
            <span>OR</span>
            <div className="slect-item">
              <h4>Find a budget friendly restaurant</h4>
              <img width="300" height="300" src="https://www.c-diversity.social/images/iter3/restaurant.jpg" alt=""></img>
            </div>
          </div>
        </div>
        <Footer dataSource={Footer10DataSource} isMobile={this.isMobile} />
      </div>
    );
  }


}

export default Foodie;