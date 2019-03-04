import React, { Component } from "react";

export default class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };

  handleClicks = () => {
    this.setState({ timesClicked: this.state.timesClicked + 1 });
  };
  render() {
    return (
      <button onClick={this.handleClicks}>
        <label>{this.state.timesClicked}</label>
      </button>
    );
  }
}
