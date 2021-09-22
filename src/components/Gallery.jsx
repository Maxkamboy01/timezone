import React from "react";
import Bigimg from "./assets/img/gallery/gallery-1.png";
import Smallimg from "./assets/img/gallery/gallery-2.png";
import Img from "./assets/img/gallery/gallery-3.png";
import Img_2 from "./assets/img/gallery/gallery-4.png";

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="gallery-wrapper">
        <div className="first-box">
          <div className="cover cover-1">
            <img src={Bigimg} alt="" className="big-img" />
          </div>
          <div className="cover cover-2">
            <img src={Smallimg} alt="" className="small-img" />
          </div>
        </div>
        <div className="second-box">
          <div className="cover cover-3">
            <img src={Img} alt="" />
          </div>
          <div className="cover cover-4">
            <img src={Img_2} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
