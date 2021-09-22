import React, { Component } from "react";
import Cube from "./assets/icons/cube.svg";
import Lock from "./assets/icons/lock.svg"
import Refresh from "./assets/icons/refresh.svg"

class FooterAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="footeradd-wrapper">
        <div className="container">
          <div className="add">
            <img src={Cube} alt="" />
            <p className="name">Free Shipping Method</p>
            <p className="text">
              aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
            </p>
          </div>
          <div className="add">
            <img src={Lock} alt="" />
            <p className="name">Free Shipping Method</p>
            <p className="text">
              aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
            </p>
          </div>
          <div className="add">
            <img src={Refresh} alt="" />
            <p className="name">Free Shipping Method</p>
            <p className="text">
              aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterAdd;
