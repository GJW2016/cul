import React, { Component } from "react";
import { Calendar, Badge, Icon, Radio } from "antd";


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
  render() {
    const {currItem, quizzes, value, index, isResult} = this.state;

      return (
        <div className="calendar">
          <div className="calendar-wrap">
            {/*header of the calendar*/}
            <div className="calendar-header">
              <div>
                <h3>Lets get festive!</h3>
                <p>
                  Lets get festive!Lets get festive!Lets get festive!Lets get festive!
                </p>
              </div>
              <img width="175" src={"https://www.culturallydiversity.tk/images/calendar/festive.jpg"} alt="" />
            </div>
            {/*quiz of the calendar*/}

          </div>
        </div>
      )
  }
}
