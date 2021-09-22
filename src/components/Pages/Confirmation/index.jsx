import React from "react";
import Bigtext from "../../BigText";
import { Confirmtsyle, Subtotal, Shiping } from "./style";

function Confirm() {
  return (
    <Confirmtsyle>
      <Bigtext>Confirmation</Bigtext>
      <p className="title">Thank you. Your order has been received.</p>
      <div className="content">
        <div className="first_table_box">
          <ul>
            Order Info
            <li>
              Order Number <span>: 60235</span>
            </li>
            <li>
              Data <span>: Oct 03, 2017</span>
            </li>
            <li>
              Total <span>: USD 2210</span>
            </li>
            <li>
              Mayment Methord <span>: Check Payments</span>
            </li>
            <td></td>
          </ul>
          <ul>
            Shipping Address
            <li>
              Street <span>: 56/8</span>
            </li>
            <li>
              City <span>: Los Angeles</span>
            </li>
            <li>
              Country <span>: United States</span>
            </li>
            <li>
              Postcode <span>: 36952</span>
            </li>
          </ul>
        </div>
        <div className="right_table_box">
          <ul>
            Billing Address
            <li>
              Street <span>: 56/8</span>
            </li>
            <li>
              City <span>: Los Angeles</span>
            </li>
            <li>
              Country <span>: United States</span>
            </li>
            <li>
              Postcode <span>: 36952</span>
            </li>
          </ul>
        </div>
        <div className="details_box">
          <p className="title">Order Details</p>
          <table>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>Pixelstore Fresh Blackberry</td>
              <td> X02</td>
              <td> $720.00</td>
            </tr>
            <tr>
              <td>Pixelstore Fresh Blackberry</td>
              <td> X02</td>
              <td> $720.00</td>
            </tr>
            <tr>
              <td>Pixelstore Fresh Blackberry</td>
              <td> X02</td>
              <td> $720.00</td>
            </tr>
            <Subtotal>
              <td>Subtotal</td>
              <td></td>
              <td> $2160.00</td>
            </Subtotal>
            <Shiping>
              <td>Shipping</td>
              <td></td>
              <td>Flat Rate: $50.00</td>
            </Shiping>
            <tr>
              <td>Quantity</td>
              <td></td>
              <td>Total</td>
            </tr>
          </table>
        </div>
      </div>
    </Confirmtsyle>
  );
}

export default Confirm;
