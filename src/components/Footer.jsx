import React, { Component } from "react";
import logo from "./assets/img/logo/logo2_footer.png";
import Footer_add from "./Footer_add";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section>
        <Footer_add />
        <div className="footerwrapper">
          <div className="container">
            <div className="footerelements-box">
              <div className="box">
                <img src={logo} alt="logo" className="logo" />
                <p className="text">
                  Asorem ipsum adipolor sdit amet, consectetur adipisicing
                  elitcf sed do eiusmod tem.
                </p>
              </div>
              <div className="box links-box">
                <p className="title">Quick Links</p>
                <Link to="/about">
                  <a href="#home">About</a>
                </Link>
                <Link to="/pages">
                  Offers & Discounts
                </Link>
                <Link to="/contact">Get Coupon</Link>
                <Link to="/contact">Contact Us</Link>
              </div>
              <div className="box links-box">
                <p className="title">New Products</p>
                <Link to="/shop">Woman Cloth</Link>
                <Link to="latest">
                  Fashion Accessories
                </Link>
                <Link to="/latest">Man Accessories</Link>
                <Link to="/shop">
                  Rubber made Toys
                </Link>
              </div>
              <div className="box links-box">
                <p className="title">Support</p>

                <Link to="/blog">
                  Frequently Asked Questions
                </Link>
                <Link to="/pages">
                  Terms & Conditions
                </Link>
                <Link to="/about">Privacy Policy</Link>
                <Link to="/contact">
                  Report a Payment Issue
                </Link>
              </div>
            </div>
            <div className="copyright">
              <span>
                Copyright ©2021 All rights reserved | This template is made with{" "}
                <span style={{ color: "#ea0000" }}> ❤ </span>
                by Colorlib
              </span>
              <div className="icons-box">
                <a href="https://tmb-01.github.io/timezone/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://tmb-01.github.io/timezone/">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://tmb-01.github.io/timezone/">
                  <i className="fab fa-behance"></i>
                </a>
                <a href="https://tmb-01.github.io/timezone/">
                  <i className="fas fa-globe"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
