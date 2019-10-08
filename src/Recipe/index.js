import React, { Component } from "react";
import { Icon } from "antd";
import "./index.css";
import { getRecipes } from "../common/api";
const Country = ["Australia", "China", "India", "Nepal" ];

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 600,
      data: [],
      text: 0,
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

  render() {
    let { height } = this.state;
    let listData = this.getFilterData();
    return (
      <div className="menu" style={{ height }}>
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
                    <br />
                    <br />
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
          <div>
            <div>Cook at home</div>
            <p>
            Most of the students are completely dreadful of cooking at home which is understandable since cooking seems like a tedious task. But what if you get to cook dishes from your homeland from some easy to cook recipes?
            If that isn't convincing enough, how about the thought that cooking at home would actually save you a handful of money!
            Just select a cuisine below and check out the recipes by yourselves we bet you'd be calling your friends for lunch to try out your favorite dish from your homeland!
          </p>
          </div>
          <img src="https://www.c-diversity.social/images/iter3/pic1.png" alt=""></img>
        </div>
        {/*  */}
        <div className="choose">
          <div className="choose-head">
            <h3>Choose a cuisine</h3>
            <select value={this.state.text} onChange={e => this.setState({ text: Number(e.target.value) })}>
              {Country.map((item, index) => {
                return (
                  <option value={index} key={index}>
                    {item}
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
                  <img width="300" height="300" src={item.pic} alt=""></img>
                  <button onClick={() => this.onShowItem(item)}>Check out the recipe >></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
