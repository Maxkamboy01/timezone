import React, { Component } from "react";

class BigText extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="bigheader">{this.props.children}</div>;
    
  }
}

export default BigText;
