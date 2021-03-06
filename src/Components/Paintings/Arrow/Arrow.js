import React, { Component } from "react";

class Arrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowLeftStyle: "Arrow Arrow--left fas fa-arrow-left",
      arrowRightStyle: "Arrow Arrow--right fas fa-arrow-right"
    };
  }
  render() {
    console.log("display", this.props.hideIntro);
    return (
      <span
        className={
          (this.props.isLeft
            ? this.state.arrowLeftStyle
            : this.state.arrowRightStyle) +
          (this.props.hideIntro ? "" : "NotShow")
        }
        onClick={this.props.goToNextPainting}
      />
    );
  }
}

export default Arrow;
