import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./index.css";
import { getRestaurants } from "../common/api";
import {Checkbox, Col, Row, Icon} from "antd";


const Country = ["Australian", "Chinese", "Indian", "Nepalese"];
const Ratings = [1, 2, 3, 4, 5];
const K_SIZE = 40;
const greatPlaceStyle = {
  position: "absolute",
  width: "auto",
  height: "auto",
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
  border: "1px solid rgba(0,0,0,.4)",
  borderRadius: 4,
  backgroundColor: "white",
  textAlign: "center",
  color: "#3f51b5",
  fontSize: 14,
  fontWeight: "bold",
  padding: "15px 6px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  boxShadow: "0px 1px 5px rgba(0,0,0,.15)",
};

const AnyReactComponent = ({ text }) => <div style={greatPlaceStyle}><Icon className="icon" type="info-circle"/> {text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: -37.8316016914,
      lng: 144.9344274402
    },
    zoom: 13
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: 3,
      show: false,
      item: {},
      country: -1,
      rating: -1
    };
  }

  componentWillMount() {
    getRestaurants().then(({data}) => {
      this.setState({
        data: data.json_list || []
      });
    });
    document.body.scrollIntoView(1);
  }

  getFilterData = () => {
    const {country, rating, data} = this.state;
    return data.filter(item => {
      let isCountry = false;
      let isRate = false;
      if (country == -1) {
        isCountry = true;
      } else {
        isCountry = item.country === country;
      }
      if (rating == -1) {
        isRate = true;
      } else {
        isRate = rating === item.rate;
      }
      return isCountry && isRate;
    });
  };

  _onChildClick = id => {
    let item = this.state.data.find(item => item.id == id);
    this.setState({
      item: item || {}
    });
  };
  onClick = () => {
    this.props.history.push("/foodie");
  };
  render() {
    const data = this.getFilterData();

    return (
      <div className="map" style={{ height: "100%", width: "100%", paddingTop: 50 }}>
        <div className="map-block">
          <strong>
          <h3>Grab a bite!</h3>
          <p>
            No time to cook? Not a problem. Here is a perfectly curated range of amazing places to eat which are completely budget friendly. The suggested restaurants are tailored to a global taste with various choices of cuisines to choose from and the restaurant ratings. So why wait? Gather your friends and hop on to the restaurants near you and have a feast without burning a hole in your pocket!
          </p>
          </strong>
        </div>
        <div className="map-header">
          <h3>Find a restaurant tailored to your cravings</h3>
          <div className="select-wrap">
            <select value={this.state.country} onChange={e => this.setState({ country: e.target.value })}>
              <option value={-1} key="all">
                Select a cuisine
              </option>
              {Country.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
            <select value={this.state.rating} onChange={e => this.setState({ rating: Number(e.target.value) })}>
              <option value={-1} key="all">
                Select a rating
              </option>
              {Ratings.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <Row gutter={32} className="home-row">
          <Col span={15}>
            <Row gutter={12}>
              <div style={{ width: "82%", height: 600, marginTop: 30, marginLeft:'18%'}}>
                <GoogleMapReact onChildClick={this._onChildClick} bootstrapURLKeys={{ key: "AIzaSyDjQTLkPlplw6k-1peUtLcIvXU5IW_ArwI" }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
                  {data.map(item => {
                    return <AnyReactComponent lat={Number(item.latitude)} lng={Number(item.longitude)} text={item.name} key={item.id} />;
                  })}
                </GoogleMapReact>
              </div>
            </Row>
          </Col>
          <Col span={9} style={{ borderLeft: "1px solid rgba(0,0,0,.45)" }}>
            <Row gutter={12}>
             <div style={{ width: "70%", padding: 30, marginTop: 30, backgroundColor: "#fff", marginBottom: 30, borderRadius: 5}}>
              <h2 style={{ textAlign: "center", fontSize: 30 }}>Restaurant details</h2>
              <div>
                <h2 style={{ textAlign: "left" }}>Name:</h2>
                <div style={{ fontSize: 20, textAlign: "left" }}>{this.state.item.name}</div>
              </div>
              <div>
                <h2 style={{ textAlign: "left" }}>Address:</h2>
                <div style={{ fontSize: 20, textAlign: "left" }}>{this.state.item.address}</div>
              </div>
              <div>
                <h2 style={{ textAlign: "left" }}>Opening hours:</h2>
                <div style={{ whiteSpace: "pre-wrap", fontSize: 20, textAlign: "left" }} dangerouslySetInnerHTML={{ __html: this.state.item.timings }}></div>
              </div>
              <div style={{marginTop: 20,textAlign: 'center'}}>
              <button onClick={this.onClick} className="app-button">
                Go back
              </button>
             </div>
             </div>
            </Row>
          </Col>
        </Row>
      </div>

    );
  }
}



export default Map;