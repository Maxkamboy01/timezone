import React from "react";
import BigText from "../../BigText";
import { Cartstyle } from "./style";
// import { ReactComponent as Cart_1 } from "../../assets/img/gallery/card1.png";
// import { ReactComponent as Cart_2 } from "../../assets/img/gallery/card2.png";
import Cart_1 from "../../assets/img/gallery/card1.png";
import Cart_2 from "../../assets/img/gallery/card2.png";

function Cart() {
  return (
    <Cartstyle>
      <BigText>Cart List</BigText>
      <div className="content">
        <table>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className="tds">
            <td>
              <img src={Cart_1} alt="img" />
              <span>Minimalistic shop for multipurpose use</span>
            </td>
            <td>$360.00</td>
            <td>
              <div className="number">1</div>
              <div className="buttons">
                <button>+</button>
                <button>-</button>
              </div>
            </td>
            <td>$720.00</td>
          </tr>
          <tr className="tds">
            <td>
              <img src={Cart_2} alt="img" />
              <span>Minimalistic shop for multipurpose use</span>
            </td>
            <td>$360.00</td>
            <td>
              <div className="number">1</div>
              <div className="buttons">
                <button>+</button>
                <button>-</button>
              </div>
            </td>
            <td>$720.00</td>
          </tr>
          <tr className="buttonstr">
            <button>Update Cart</button>
            <button>Close Coupon</button>
          </tr>
          <tr className="total">
            <td></td>
            <td></td>
            <td>Subtotal</td>
            <td>$2160.00</td>
          </tr>
          <ul>
            <li className="li1">
              <span>Shipping</span> Flat Rate: $5.00
            </li>
            <li>Free Shipping</li>
            <li>Flat Rate: $10.00</li>
            <li>Local Delivery: $2.00</li>
            <li className="calculate">
              Calculate Shipping<i className="fas fa-sort-down"></i>
            </li>
            <select defaultValue="Bangladesh">
              <option value="Bangladesh"> Bangladesh</option>
              <option value="India"> India</option>
              <option value="Pakistan"> Pakistan</option>
            </select>
            <select defaultValue="Select a State">
              <option value="Select a State">Select a State</option>
              <option value="Select a State">Select a State</option>
              <option value="Select a State">Select a State</option>
            </select>
            <input type="text" placeholder="Postcode/Zipcode" />
            <button className="update">Update Details</button>
            <tr className="endbuttonstr">
              <button>Continue Shopping</button>
              <button>Proceed To Checkout</button>
            </tr>
          </ul>
        </table>
      </div>
    </Cartstyle>
  );
}

export default Cart;
