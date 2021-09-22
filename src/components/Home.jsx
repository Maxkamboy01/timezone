import Header from "./Header.jsx";
import Arrival from "./Arrival";
import Gallery from "./Gallery";
import Items from "./Items.jsx";
import Youtube from "./Youtube.jsx";
import Choose from "./Choose.jsx";
import "../style.scss";
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <Header></Header>
        <Arrival></Arrival>
        <Gallery />
        <Items></Items>
        <Youtube></Youtube>
        <Choose></Choose>
      </div>
    );
  }
}

export default Home;
