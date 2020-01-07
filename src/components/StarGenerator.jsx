import React, { Component } from "react";
import utils from "../math-utils";

class StarGenerator extends Component {
  render() {
    return utils
      .range(1, this.props.stars)
      .map(starId => <div key={starId} className="star" />);
  }
}

export default StarGenerator;
