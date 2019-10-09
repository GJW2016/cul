import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./index.css";
import { getRestaurants } from "../common/api";
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
  padding: "4px 6px",
  cursor: "pointer",
  whiteSpace: "nowrap",
  boxShadow: "0px 1px 5px rgba(0,0,0,.15)"
};

const AnyReactComponent = ({ text }) => <div style={greatPlaceStyle}>{text}</div>;

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
  render() {
    const data = this.getFilterData();
    return (
      <div className="map" style={{ height: "100%", width: "100%", paddingTop: 50 }}>
        <div className="map-header">
          <h3>Find a nestaunant tailamed to your chavings</h3>
          <div className="select-wrap">
            <select value={this.state.country} onChange={e => this.setState({ country: e.target.value })}>
              <option value={-1} key="all">
                all
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
                all
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
        <div style={{ width: "80%", height: 600, margin: "0 auto", marginTop: 30 }}>
          <GoogleMapReact onChildClick={this._onChildClick} bootstrapURLKeys={{ key: "AIzaSyDjQTLkPlplw6k-1peUtLcIvXU5IW_ArwI" }} defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
            {data.map(item => {
              return <AnyReactComponent lat={Number(item.latitude)} lng={Number(item.longitude)} text={item.name} key={item.id} />;
            })}
          </GoogleMapReact>
        </div>
        <div style={{ width: "80%", padding: 30, margin: "0 auto", marginTop: 30, backgroundColor: "#fff" }}>
          <h3 style={{ textAlign: "center", fontSize: 22 }}>Restauant details</h3>
          <div>
            <h4 style={{ textAlign: "center" }}>Name</h4>
            <div style={{ fontSize: 16, textAlign: "center" }}>{this.state.item.name}</div>
          </div>
          <div>
            <h4 style={{ textAlign: "center" }}>Address</h4>
            <div style={{ fontSize: 16, textAlign: "center" }}>{this.state.item.address}</div>
          </div>
          <div>
            <h4 style={{ textAlign: "center" }}>Opening hours</h4>
            <div style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: this.state.item.timings }} style={{ fontSize: 16, textAlign: "center" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;