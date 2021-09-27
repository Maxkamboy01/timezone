import React, { Component } from "react";
import Itemimg1 from "./assets/img/gallery/popular1.png";
import Itemimg2 from "./assets/img/gallery/popular2.png";
import Itemimg3 from "./assets/img/gallery/popular3.png";
import Itemimg4 from "./assets/img/gallery/popular4.png";
import Itemimg5 from "./assets/img/gallery/popular5.png";
import Itemimg6 from "./assets/img/gallery/popular6.png";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          img: Itemimg1,
        },
        {
          img: Itemimg2,
        },
        {
          img: Itemimg3,
        },
        {
          img: Itemimg4,
        },
        {
          img: Itemimg5,
        },
        {
          img: Itemimg6,
        },
      ],
    };
  }
  render() {
    return (
      <div className="items-wrapper">
        <div className="container">
          <div className="title-box">
            <p className="title">Popular Items</p>
            <p className="subtitle">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna <br /> aliqua. Quis ipsum suspendisse
              ultrices gravida.
            </p>
            <div className="items-content">
              {this.state.items.map((value,index) => {
                return (
                  <div key={index} className="item">
                    <div className="img-box">
                      <img src={value.img} alt="" />
                      <i className="far fa-heart like"></i>
                      <div className="menu">Add to cart</div>
                    </div>
                    <div className="item-texts">
                      <p className="name">Thermo Ball Etip Gloves</p>
                      <p className="price">$ 45,743</p>
                    </div>
                  </div>
                );
              })}
              <button className="viewmore">
                <p>view more products</p> <div className="hover"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Items;
