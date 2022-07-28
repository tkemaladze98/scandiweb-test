import React, { Component } from "react";
import LeftNav from "./LeftNav";
import MiddleNav from "./MiddleNav";
import RightNav from "./RightNav";
import "./nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <LeftNav />
        <MiddleNav />
        <RightNav />
      </div>
    );
  }
}
