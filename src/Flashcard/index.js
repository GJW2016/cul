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
class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectTags: [],
      selectCountries: [],
      countries: [],
      tags: [],
      banner: [],
      active: []
    };
  }

  componentWillMount() {
    this.initParams();
    this.getContents();
    this.getTags();
    this.getCountries();
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
    let banner = [];
    try {
      selectTags = selectTags.split(",") || [];
      selectCountries = selectCountries.split(",") || [];
    } catch (error) {
      selectTags = [];
      selectCountries = [];
    }
    selectTags.forEach(tag_id => {
      selectCountries.forEach(country_id => {
        banner.push({
          tag_id: ~~tag_id,
          country_id: ~~country_id
        });
      });
    });
    this.setState({
      selectTags,
      selectCountries,
      banner,
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
  getData({ country_id, tag_id }) {
    const { countries, tags, data } = this.state;
    return {
      tag: tags.find(item => item.id === tag_id) || {},
      countrie: countries.find(item => item.id === country_id) || {},
      desc: data.find(item => item.country_id === country_id && item.tag_id === tag_id) || {}
    };
  }
  onChange = () => {};
  render() {
    const { banner, active } = this.state;
    const item = banner[active] ? this.getData(banner[active]) : { countrie: {}, desc: {}, tag: {} };
    return (
      <div className="info">
        <div className="info-wrap">
          <div className="info-header">
            <div>
              <h3>{item.countrie.name}</h3>
              <p>{item.countrie.des}</p>
            </div>
            <img width="175" src={item.countrie.img} alt="" />
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
              <div>{item.desc.content}</div>
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

export default Info;
