import React, { Component } from "react";
import "./index.css";
import { getContents, getTags, getCountries } from "../common/api";
import { Icon } from "antd";


function URLObject(url) {
  url = url || window.location.href;
  const theRequest = {};
  let strs = "";
  if (url.indexOf("?") !== -1) {
    const str = url.substring(url.indexOf("?") + 1);
    strs = str.split("&");
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
class Flashcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectTags: [],
      selectCountries: [],
      countries: [],
      tags: [],
      active: [],
      banner: []
    };
  }

  componentWillMount() {
    Promise.all([this.getContents(), this.getTags(), this.getCountries()]).then(() => {
      this.initParams();
    });
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
  initParams() {
    let { selectTags = "", selectCountries = "" } = URLObject();
    try {
      selectTags = selectTags.split(",").map(id => ~~id) || [];
      selectCountries = selectCountries.split(",").map(id => ~~id) || [];
    } catch (error) {
      selectTags = [];
      selectCountries = [];
    }
    this.setState({
      selectTags,
      selectCountries,
      banner: this.getData(selectTags, selectCountries),
      active: 0
    });
  }
  filterData() {
    const { data, selectTags, selectCountries } = this.state;
    return data.filter(item => {
      return selectCountries.includes(item.country_id) && selectTags.includes(item.tag_id);
    });
  }
  async getContents() {
    const { data } = await getContents();
    this.setState({
      data: data.json_list || []
    });
  }
  getData(selectTags, selectCountries) {
    const { countries, tags, data } = this.state;
    let result = data.filter(item => {
      return selectTags.includes(item.tag_id) && selectCountries.includes(item.country_id);
    });
    result.map(d => {
      d.tag = tags.find(item => item.id === d.tag_id) || {};
      d.countrie = countries.find(item => item.id === d.country_id) || {};
      d.desc = d;
      return d;
    });

    return result;
  }
  onChange = () => {};
  render() {
    const { banner, active } = this.state;
    const item = banner[active] || { tag: {}, countrie: {}, desc: {} };
    return (
      <div className="info">
        <div className="info-wrap">
          <div className="info-header">
            <div>
              <h3>{item.countrie.name}</h3>
              <p>{item.countrie.des}</p>
            </div>
            <img width="175" style={{ height: "auto" }} src={item.countrie.img} alt="" />
          </div>
          <div className="info-banner">
            <div
              className="info-left-btn"
              onClick={() =>
                this.setState({
                  active: active - 1 < 0 ? banner.length - 1 : active - 1
                })
              }
            >
              <Icon type="left" />
            </div>
            <div className="info-banner-inner">
              <div className="info-content">
                <div className="info-img" style={{ width: 200 }}>
                  <img style={{ width: 200, height: "auto"}} src={item.img} alt="" />
                </div>
                <div className="info-text" style={{ flex: 1, paddingLeft: 20 }}>
                  <h3><strong>{item.tag.name}</strong></h3>
                  <h3>{item.desc.content_name}</h3>
                  <p>{item.desc.content}</p>
                </div>
                <div>{active+1}/{banner.length}</div>
              </div>
            </div>
            <div
              className="info-right-btn"
              onClick={() =>
                this.setState({
                  active: active + 1 > banner.length - 1 ? 0 : active + 1
                })
              }
            >
              <Icon type="right" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Flashcard;
