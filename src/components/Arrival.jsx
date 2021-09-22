import React from "react";
import Arrival_1 from "./assets/img/gallery/new_product1.png";
import Arrival_2 from "./assets/img/gallery/new_product2.png";
import Arrival_3 from "./assets/img/gallery/new_product3.png";

class Arrival extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="arrival">
        <div className="arrival-wrapper">
          <p className="title">New Arrivals</p>
          <div className="cards-wrapper">
            <div className="card">
              <div className="img-div">
                <img src={Arrival_1} alt="" />
              </div>
              <p className="card-title">Thermo Ball Etip Gloves</p>
              <p className="price">$45,475</p>
            </div>
            <div className="card">
              <div className="img-div">
                <img src={Arrival_2} alt="" />
              </div>
              <p className="card-title">Thermo Ball Etip Gloves</p>
              <p className="price">$45,475</p>
            </div>
            <div className="card">
              <div className="img-div">
                <img src={Arrival_3} alt="" />
              </div>
              <p className="card-title">Thermo Ball Etip Gloves</p>
              <p className="price">$45,475</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Arrival;
