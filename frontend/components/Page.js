import React, { Component } from "react";

export default class Page extends Component {
  render() {
    return (
      <div>
        <p> I'm the page Component</p>
        {this.props.children}
      </div>
    );
  }
}
