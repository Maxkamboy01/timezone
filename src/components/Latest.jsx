import React, { Component } from "react";
import BigText from "./BigText";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import Img_1 from "../components/assets/img/gallery/gallery-1.png";
import Img_2 from "./assets/img/gallery/new_product1.png";
import Img_3 from "./assets/img/gallery/youtube.png";

class Latest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="latest-wrapper">
        <BigText>Watch Shop</BigText>
        <div className="latest-content">
          <Splide>
            <SplideSlide>
              <img src={Img_1} alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src={Img_2} alt="Image 2" />
            </SplideSlide>
            <SplideSlide>
              <img src={Img_3} alt="Image 2" />
            </SplideSlide>
          </Splide>
          <div className="latest-texts">
            <p className="title">Foam filling cotton slow <br /> rebound pillows</p>
            <p className="text">
              Seamlessly empower fully researched growth strategies and
              interoperable internal or “organic” sources. Credibly innovate
              granular internal or “organic” sources whereas high standards in
              web-readiness. Credibly innovate granular internal or organic
              sources whereas high standards in web-readiness. Energistically
              scale future-proof core competencies vis-a-vis impactful
              experiences. Dramatically synthesize integrated schemas. with
              optimal networks.
            </p>
            <div className="quantiti">
              quantity
              <div className="numbers">
                <button>-</button>
                <p className="count">1</p>
                <button>+</button>
              </div>
              $55 for one
            </div>
            <button className="add">ADD TO CART</button>
            <div className="promotions">
              <p className="title">Get promotions & updates!</p>
              <p className="subtitle">
                Seamlessly empower fully researched growth strategies and
                interoperable internal or “organic” sources <br /> credibly innovate
                granular internal .
              </p>
              <div className="input-box">
                  <input type="text" placeholder="Enter your mail" />
                  <button>
                      Subscribe
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Latest;
