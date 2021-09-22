import React, { Component } from "react";
import BigText from "./BigText";
import Youtube from "./Youtube";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-wrapper">
        <BigText>About Us</BigText>
        <div className="about-text-wrapper">
          <p className="title">
            <p className="line"></p>
            Our Mission
          </p>
          <p className="text">
            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
            labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan lacus.
            <br />
            <br />
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan.
          </p>
        </div>
        <div className="about-text-wrapper">
          <p className="title">
            <p className="line"></p>
            Our Vision
          </p>
          <p className="text">
            Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt
            labore et dolore magna aliqua. Quis ipsum suspendisces gravida.
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan lacus.
            <br />
            <br />
            Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan
            lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas
            accumsan.
          </p>
        </div>
        <Youtube></Youtube>
      </div>
    );
  }
}

export default About;
