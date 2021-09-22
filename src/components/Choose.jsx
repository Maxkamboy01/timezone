import React, { Component } from "react";
import Chooseimg from "./assets/img/gallery/choce_watch1.png";
import Chooseimg_2 from "./assets/img/gallery/choce_watch2.png";

class Choose extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="choose-wrapper">
        <div className="container">
          <div className="choose">
            <div className="texts-box">
              <p className="title">Watch of Choice</p>
              <p className="text">
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button className="showmore">
                <span>show watches</span>
                <div className="hover"></div>
              </button>
            </div>
            <img src={Chooseimg} alt="" />
          </div>
          <div className="choose" style={{flexDirection: "row-reverse"}}>
            <div className="texts-box">
              <p className="title">Watch of Choice</p>
              <p className="text">
                Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <button className="showmore">
                <span>show watches</span>
                <div className="hover"></div>
              </button>
            </div>
            <img src={Chooseimg_2} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Choose;
