import React from "react";
import Bigtext from "../../BigText";
import "antd/dist/antd.css";
import { Select } from "antd";
import { MainWrapper } from "./style";

function Checkout() {
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <>
      <div>
        <Bigtext>Checkout</Bigtext>
        <MainWrapper>
          <p className="returning">
            Returning Customer? <a href="#">Click here to login</a>
          </p>
          <p className="if_you">
            If you have shopped with us before, please enter your details in the
            boxes below. If you are a new customer, please proceed to the
            Billing & Shipping section.
          </p>
          <div style={{ padding: "20px" }}>
            <div className="dflexinput">
              <input
                type="email"
                placeholder="username or email"
                className="email"
              />
              <input
                type="password"
                placeholder="password"
                className="password"
              />
            </div>
            <div className="dflexinput">
              <button className="login">LOG IN</button>
              <p className="checkbox">
                <input type="checkbox" />
                <p>Remember me</p>
              </p>
            </div>
            <p className="lost">Lost your password?</p>
          </div>
          <p className="returning">
            Have a coupon? <a href="#">Click here to enter your code</a>
          </p>
          <div style={{ padding: "20px" }} className="applybox">
            <input type="text" placeholder="Enter coupon code" />
            <button className="apply">Apply Coupon</button>
          </div>
          <div className="mainbox">
            <div className="leftBox">
              <p className="billing">Billing Details</p>
              <form>
                <div className="flexinput">
                  <input
                    type="text"
                    placeholder="First name *"
                    className="name"
                  />
                  <input
                    type="text"
                    placeholder="Last name *"
                    className="name"
                  />
                </div>
                <input type="text" placeholder="Company name" />
                <div className="flexinput">
                  <input type="tel" placeholder="Phone number *" />
                  <input type="email" placeholder="Email address *" />
                </div>
                <Select
                  showSearch
                  className="select"
                  placeholder="Country"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Country</Option>
                  <Option value="lucy">Country</Option>
                  <Option value="tom">Country</Option>
                </Select>
                <input type="text" placeholder="Address line 01 *" />
                <input type="text" placeholder="Address line 02 *" />
                <input type="text" placeholder="Town/City *" />
                <Select
                  className="select"
                  showSearch
                  placeholder="District"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">District 01</Option>
                  <Option value="lucy">District 02</Option>
                  <Option value="tom">District 03</Option>
                </Select>
                <input type="text" placeholder="Postcode/ZIP" />
                <p className="checkbox">
                  <input type="checkbox" />
                  <p>Create an account?</p>
                </p>
              </form>
              <div className="shipingbox">Shipping Details</div>
              <p className="checkbox">
                <input type="checkbox" />
                <p>Ship to a different address?</p>
              </p>
              <textarea className="textarea" placeholder="Order Notes" />
            </div>
            <div className="rightBox">
              <p className="title">Your Order</p>
              <table>
                <tr>
                  <th>Product</th>
                  <th></th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>Fresh Blackberry</td>
                  <td>* 02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>Fresh Tomatoes</td>
                  <td>* 02</td>
                  <td>$720.00</td>
                </tr>
                <tr>
                  <td>Fresh Brocoli</td>
                  <td>* 02</td>
                  <td>$720.00</td>
                </tr>
                <tr className="subtotal">
                  <td>Subtotal</td>
                  <td></td>
                  <td>$2160.00</td>
                </tr>
                <tr className="shipping">
                  <td>SHIPPING</td>
                  <td></td>
                  <td>Flat Rate: $50.00</td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td></td>
                  <td>$2210.00</td>
                </tr>
              </table>
              <p className="checkbox">
                <input type="checkbox" />
                <p>CHECK PAYMENTS</p>
              </p>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  padding: "16px",
                  fontSize: "17px",
                }}
              >
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </div>
              <p className="checkbox">
                <input type="checkbox" />
                <p>PAYPAL</p>
              </p>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#fff",
                  padding: "16px",
                  fontSize: "17px",
                }}
              >
                Please send a check to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </div>
              <p className="checkbox">
                <input type="checkbox" />
                <p>
                  I’ve read and accept the <a href="#">terms & conditions*</a>
                </p>
              </p>
              <button>PROCEDD TO PATPAL</button>
            </div>
          </div>
        </MainWrapper>
      </div>
    </>
  );
}

export default Checkout;
