import React from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/img/logo/logo2_footer.png";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <nav>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <ul className="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li className="li">
            <Link to="/shop">
              latest <div>HOT</div>
              <div className="dropdown">
                <Link to="/shop">Product List</Link>
                <Link to="/latest">Product Details</Link>
              </div>
            </Link>
          </li>
          <li className="blogli">
            <Link to="/blog">Blog</Link>
            <div className="dropdown">
              <Link to="/blog">Blog</Link>
              <Link to="/blogdetails">Blog Details</Link>
            </div>
          </li>
          <li className="pages">
            <Link to="/login">pages</Link>
            <div className="dropdown">
              <Link to="/login">Login</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/element">Element</Link>
              <Link to="/confirm">Confirmation</Link>
              <Link to="/checkout">Product Checkout</Link>
            </div>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
        <ul className="avatar">
          <i class="fas fa-search"></i>
          <i class="fas fa-user"></i>
          <i class="fas fa-shopping-cart"></i>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
