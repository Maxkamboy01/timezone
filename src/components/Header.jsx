import React from "react";
import Headerimg from "./assets/img/hero/watch.png"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header-wrapper">
        <div className="header-text">
          <p className="title">Select your new perfect style</p>
          <p className="subtitle">
            Codit ducimus ex a ab eum. Possimus at nobis qui consequuntur cumque 
            voluptate <br /> omnis deserunt,  quo rerum incidunt nam accusantium alias.
          </p>
          <button className="show button">
            <div className="hover"></div>
              shop now
          </button>
        </div>
        <img src={Headerimg} alt="" />
      </div>
    );
  }
}

export default Header;
