import React, { Component } from "react";
import Chest from "../images/chest.png";

const box = {
  padding: 0,
  height: 70,
  width: 70,
  cursor: "move",
  position: "absolute",
  zIndex: 1000,
};

class MoveChest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrag: false,
      x: 0,
      y: 0,
      top: 830,
      left: 830,
    };
    this.handleDown = this.handleDown.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleUp = this.handleUp.bind(this);
  }

  handleDown(e) {
    const item = this.node;
    const x = e.pageX - item.offsetLeft;
    const y = e.pageY - item.offsetTop;
    this.setState({ isDrag: true, x, y });
  }

  handleMove(e) {
    if (this.state.isDrag) {
      e.preventDefault();

      this.setState({
        top: e.pageY - this.state.y,
        left: e.pageX - this.state.x,
      });
    }
  }
  handleUp() {
    this.setState({ isDrag: false });
  }

  render() {
    const { top, left } = this.state;
    const { classes } = this.props;
    return (
      <div
        role="presentation"
        ref={(node) => {
          this.node = node;
        }}
        onMouseDown={this.handleDown}
        onMouseMove={this.handleMove}
        onMouseUp={this.handleUp}
        onMouseLeave={this.handleUp}
        style={{
          ...box,
          top,
          left,
        }}
      >
        <img src={Chest} art="chest" width="70" height="70" />
      </div>
    );
  }
}

export default MoveChest;
