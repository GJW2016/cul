import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css";
import { getRecipes } from "../common/api";

const Country = [{label:"Australian", value:3}, {label:"Chinese", value:0}, {label:"Indian", value:1}, {label:"Nepalese", value:2}];

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 600,
      data: [],
      text: 3,
      show: false,
      item: {}
    };
  }

  componentWillMount() {
    this.setState({
      height: document.body.offsetHeight
    });
    getRecipes().then(({ data }) => {
      this.setState({
        data: data.json_list || []
      });
    });
    document.body.scrollIntoView(1);
  }

  getFilterData() {
    return this.state.data.filter(item => item.country_id - 1 === this.state.text);
  }
  onShowItem = item => {
    this.setState({
      item,
      show: true
    });
  };
  onModalClose = () => {
    this.setState({
      show: false
    });
  };
  onClick = () => {
    this.props.history.push("/foodie");
  };
  render() {
    let { height } = this.state;
    let listData = this.getFilterData();
    return (
      <div className="menu">
        {this.state.show && (
          <div className="modal">
            <div className="modal-inner">
              <div className="modal-content">
                <Icon onClick={this.onModalClose} type="close-circle" className="close" style={{ fontSize: 30, color: "#fff" }} />
                <div className="modal-inner-head">{this.state.item.name}</div>
                <div className="modal-body">
                  <div style={{ padding: "15px" }}>
                    <p style={{ fontWeight: 700 }}>List of ingredients:</p>
                    <div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: this.state.item.ingredients }}></div>
                  </div>
                  <div style={{ padding: "15px" }}>
                    <p style={{ fontWeight: 700 }}>How to cook:</p>
                    <div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: this.state.item.procedure }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="menu-header">
          <div style={{ flex: 1, overflow: "hidden", paddingRight: 20 }}>
            <h3 style={{ marginBottom: 10, fontStyle: 'italic'}}>Cook at home</h3>
            <p style={{ fontSize: 20, whiteSpace: "pre-wrap",wordBreak:'keep-all' }}>
              Most of the students are completely dreadful of cooking at home which is understandable since cooking seems like a tedious task. But what if you get to cook dishes from your homeland from some easy to cook recipes?<br/>
              If that isn't convincing enough, how about the thought that cooking at home would actually save you a handful of money!<br/>
              Just select a cuisine below and check out the recipes by yourselves we bet you'd be calling your friends for lunch to try out your favorite dish from your homeland!
          </p>
          </div>
          <div style={{marginTop:50}}>
          <img src="https://www.c-diversity.social/images/iter3/pic1.png" alt=""></img>
          </div>
        </div>
        {/*  */}
        <div className="choose">
          <div className="choose-head">
            <h3>Choose a Cuisine</h3>
            <select value={this.state.text} onChange={e => this.setState({ text: Number(e.target.value) })}>
              {Country.map((item, index) => {
                return (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="choose-body">
            {listData.map((item, key) => {
              return (
                <div className="food-item" key={key}>
                  <h3>{item.name}</h3>
                  <div>
                  <img width="300" height="300" src={item.pic} alt=""></img>
                  </div>
                  <div style={{marginTop: 20}}>
                  <button className="item_button" onClick={() => this.onShowItem(item)}>Check out the recipe >></button>
                  </div>
                </div>
              );
            })}
          <div style={{textAlign: "center", marginTop:20}}>
            <button onClick={this.onClick} className="app-button">
                Go back
            </button>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
