import React, { Component } from "react";
import Mainimg from "./assets/img/gallery/youtube.png";

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="youtube-wrapper">
        <div className="main-img-box">
          <img src={Mainimg} alt="" className="main-img" />
          <a className="play" href="https://tmb-01.github.io/timezone/">
            <i className="fas fa-play playbtn"></i>
          </a>
        </div>

        <div className="next-box">
          <span className="text">NEXT VIDEO</span>
          <a target="_blank" href="https://tmb-01.github.io/timezone/">
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Youtube;
