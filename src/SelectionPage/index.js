import React, { Component } from "react";
import { Row, Col, Checkbox } from "antd";
import "./index.css";
import { getTags, getCountries } from "../common/api";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      countries: [],
      selectTags: [],
      selectCountries: []
    };
  }
  async getTags() {
    const { data } = await getTags();
    this.setState({
      tags: data.json_list || []
    });
  }
  async getCountries() {
    const { data } = await getCountries();
    this.setState({
      countries: data.json_list || []
    });
  }
  componentWillMount() {
    this.getTags();
    this.getCountries();
  }
  onChange = (e, type, id) => {
    const select = this.state[type];
    const checked = e.target.checked;
    if (checked) {
      this.setState({
        [type]: [...select, id]
      });
    } else {
      this.setState({
        [type]: select.filter(item => item !== id)
      });
    }
  };
  onClick = () => {
    const { selectTags, selectCountries } = this.state;
    if (!selectTags.length || !selectCountries.length) {
      return;
    }
    this.props.history.push(`/info?selectTags=${selectTags.join(",")}&selectCountries=${selectCountries.join(",")}`);
  };
  render() {
    const { tags, countries, selectTags, selectCountries } = this.state;
    return (
      <div className="home">
        <div className="home-block">
          <p>
            Are you ready to find out everything you need to know about the culture of your international friends? <br />
            Wait no more, just choose a country and a topic and you are set to go!
            <br />
            We have an assortment of really interesting flashcards that will help you get well acquainted with the cultures of the people around you.
          </p>
          <img src="https://www.culturallydiversity.tk/images/title.png" alt=""></img>
        </div>
        {/*  */}
        <Row gutter={32} className="home-row">
          <Col span={12}>
            <h3>Pick the Country you want to know more about. </h3>
            <Row gutter={12}>
              {countries.map(item => {
                return (
                  <Col span={12} key={item.id}>
                    <div className="block-wrap" style={{ paddingRight: 20 }}>
                      <Checkbox checked={selectCountries.includes(item.id)} style={{ marginTop: 105 }} onChange={e => this.onChange(e, "selectCountries", item.id)}></Checkbox>
                      <div className="block-content">
                        <img style={{ width: "100%", height: 220 }} src={item.img} alt=""></img>
                        <h4 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, lineHeight: 2 }}>{item.name}</h4>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col span={12} style={{ borderLeft: "1px solid rgba(0,0,0,.45)" }}>
            <h3>Choose the topic you like.</h3>
            <Row gutter={12}>
              {tags.map(item => {
                return (
                  <Col span={12} key={item.id} style={{ paddingRight: 20 }}>
                    <div className="block-wrap">
                      <Checkbox checked={selectTags.includes(item.id)} style={{ marginTop: 105 }} onChange={e => this.onChange(e, "selectTags", item.id)}></Checkbox>
                      <div className="block-content">
                        <img style={{ width: "100%", height: 220 }} src={item.img} alt=""></img>
                        <h4 style={{ textAlign: "center", fontSize: 18, fontWeight: 700, lineHeight: 2 }}>{item.name}</h4>
                      </div>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col span={24} style={{ textAlign: "center", padding: "40px" }}>
            <button onClick={this.onClick} className="app-button">
              SUBMIT
            </button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
