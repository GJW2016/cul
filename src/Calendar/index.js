import React, { Component } from "react";
import { Calendar, Badge, Icon, Radio } from "antd";
import {getEvents, getFestivals, getQuizzes} from "../common/api";
import moment from "moment";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      festivals: [],
      quizzes: [],
      currItem: {},
      value: "",
      isResult: false, //submit result or not
      index: 0 //present index
    };
  }

  componentWillMount() {
    getEvents().then(({ data }) => {
      this.setState({
        event: data.json_list || []
      });
    });

    getFestivals().then(({ data }) => {
      this.setState({
        festivals: data.json_list || []
      });
    });

    getQuizzes().then(({ data }) => {
      this.setState({
        quizzes: data.json_list || []
      });
    });
  };
  //change the options of different quiz
  onRadioChange (val) {
    this.setState({
      value: val
    });
  };
  //submission of quiz
  onResultSubmit = () => {
    this.setState({
      isResult: true
    });
  };
  //festival date and event date
  dateCellRender = value => {
    const { event, festivals } = this.state;
    const result = event.filter(item => {
      return moment(item.day).format("YYYYMMDD") === value.format("YYYYMMDD"); //get the event date and set the date format
    });
    const festivalsResult = festivals.filter(item => {
      return moment(item.date).format("YYYYMMDD") === value.format("YYYYMMDD");//get the festival date and set the date format
    });
    return (
        <ul>
          {result.map((item, index) => (
              <li key={index}>
                <Badge status="success" text={item.name}></Badge>
              </li>
          ))}
          {festivalsResult.map((item, index) => (
              <li key={index}>
                <Badge status="success" text={item.name}></Badge>
              </li>
          ))}
        </ul>
    );
  };
  //show the details of selected date.
  onSelect = value => {
    const { event, festivals } = this.state;
    const result = event.find(item => {
      return moment(item.day).format("YYYYMMDD") === value.format("YYYYMMDD"); //get the event date and set the date format
    }) || {};
    const item = festivals.filter(item => {
      return moment(item.date).format("YYYYMMDD") === value.format("YYYYMMDD");//get the festival date and set the date format
    }) || { name: "No festival" };
    this.setState({
      currItem: {
        festivalName: item.name,
        eventName: result.name,
        desc: result.des,
        date: result.day,
        time: result.time,
        venue: result.loc,
        tag_id: item.tag_id,
        country_id: item.country_id
      }
    });
  };
  //link quiz result to calendar
  onSelectCurrItem = () => {
    const { event, quizzes, index, festivals } = this.state;
    const quizze = quizzes[index % quizzes.length];
    const date = quizze.date;
    const result = event.find(item => {
      return moment(item.day).format("YYYYMMDD") === moment(date).format("YYYYMMDD"); //get the event date and set the date format
    }) || {};
    const item = festivals.filter(item => {
      return moment(item.date).format("YYYYMMDD") === moment(date).format("YYYYMMDD");//get the festival date and set the date format
    }) || { name: "No festival" };
    this.setState({
      currItem: {
        festivalName: item.name,
        eventName: result.name,
        desc: result.des,
        date: result.day,
        time: result.time,
        venue: result.loc,
        tag_id: item.tag_id,
        country_id: item.country_id
      }
    });
  };

  render() {
    const {currItem, quizzes, value, index, isResult} = this.state;
    const quizze = quizzes[index % quizzes.length] || {option: ""};
      return (
        <div className="calendar">
          <div className="calendar-wrap">
            {/*header of the calendar*/}
            <div className="calendar-header">
              <div>
                <h3>Lets get festive!</h3>
                <p>
                  Let's get Festive!
                  New in Melbourne? Curb your home-sickness and get out of your house and make new friends with the locals by going to different festival events some of which could also be the ones you celebrated back home. Check out the highlighted dates on our calendar and find out when and where these festivals are held!
                </p>
              </div>
              <img width="175" src={"https://www.culturallydiversity.tk/images/calendar/festive.jpg"} alt="" />
            </div>
            {/*quiz of the calendar*/}
            <div className="quiz-block">
              <h3>Quiz</h3>
              <div className="quiz-header">
                <img width="250" alt ="" src={quizze.img}></img>
                <div className="quiz-right">
                  <h5>{quizze.quiz}</h5>
                  {quizze.option.split(",").map((item, key) => {
                    return (
                      <div key={key} style={{ fontSize: 18 }}>
                        <Radio checked={value === item} onChange={ () => this.onRadioChange(item)} style={{marginRight: 10}}>
                          {item}
                        </Radio>
                      </div>
                    );
                  })}
                  {/*submit button*/}
                  <button className="app-button" onClick={this.onResultSubmit} style={{marginTop: 10}}>
                    Submit
                  </button>
                </div>
              </div>
              {/*result of quiz*/}
              {/*right*/}
              {
                isResult && value === quizze.answer && (
                  <div className="quiz-header" style={{ marginTop: 10 }}>
                    <div className="quiz-right" style={{ paddingLeft: 10 }}>
                      <h5 style={{ marginBottom:0, paddingBottom: 0 }}>Yay, you got it right!</h5>
                      <div>
                        The picture depicts the celebration of an Indian festival named "Diwali".
                        Why not head to the Diwali celebration near you and learn more about it & at the same time make friends?
                      </div>
                      <div style={{ textAlign: "right", paddingBottom: 100 }}>
                        <button className="app-button" onClick={this.onSelectCurrItem}>
                          Event details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              }
              {/*wrong*/}
              {
                isResult && value !== quizze.answer && (
                  <div className="quiz-header" style={{ marginTop: 10 }}>
                    <div className="quiz-right" style={{ paddingLeft: 10 }}>
                      <h5 style={{ marginBottom:0, paddingBottom: 0 }}>Oops, you got it wrong!</h5>
                      <div>
                        The picture depicts the celebration of an Indian festival named "Diwali".
                        Why not head to the Diwali celebration near you and learn more about it & at the same time make friends?
                      </div>
                      <div style={{ textAlign: "right", paddingBottom: 100 }}>
                        <button className="app-button" onClick={this.onSelectCurrItem}>
                          Event details
                        </button>
                      </div>
                    </div>
                  </div>
                )
              }
              {/*Next quiz*/}
              <button className="app-button" onClick={() => {
                this.setState({
                  index: index + 1,
                  isResult: false
                })
              }} style={{ margin: "0 auto", marginTop: 10, display: "block" }}>
                Try one more!
              </button>
            </div>
              {/*Calendar*/}
            <div className="calendar-row">
              <div className="calendar-row-item">
                <Calendar dateCellRender={this.dateCellRender} onSelect={this.onSelect} />
              </div>
              <div className="calendar-row-item">
                <h3>
                  {currItem.festivalName}
                  <Icon onClick={() => {
                    if (currItem.tag_id && currItem.country_id) {
                      this.props.history.push(`/info?selectTags=${currItem.tag_id}&selectCountries=${currItem.country_id}`)
                    }
                  }} className="icon" type="info-circle"
                  />
                </h3>

                <div className="calendar-row-content">
                  {currItem.eventName && (
                  <div>
                    <h4>Event name</h4>
                    <p>{currItem.eventName}</p>
                    <h4>Description</h4>
                    <p>{currItem.desc}</p>
                    <h4>Date</h4>
                    <p>{currItem.date}</p>
                    <h4>Time</h4>
                    <p>{currItem.time}</p>
                    <h4>Venue</h4>
                    <p>{currItem.venue}</p>
                  </div>
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}
  export default Home;