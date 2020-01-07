import React, { Component } from "react";

class PlayNumber extends Component {
  render() {
    return (
      <>
        <button
          className="number"
          style={{ backgroundColor: colors[this.props.numberStatus] }}
          onClick={() =>
            this.props.onClick(this.props.number, this.props.numberStatus)
          }
        >
          {this.props.number}
        </button>
      </>
    );
  }
}

// Color Theme
const colors = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue"
};

export default PlayNumber;
