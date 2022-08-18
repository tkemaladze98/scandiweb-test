import React, { Component } from "react";
import LeftNav from "./LeftNav";
import "./nav.scss";
import MiddleNav from "./MiddleNav";
import RightNav from "./RightNav";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <LeftNav />
        <MiddleNav />
        <RightNav
          updateCount={this.props.updateCount}
          selectedCurrency={this.props.selectedCurrency}
          cartItems={this.props.cartItems}
          changeCurrency={this.props.changeCurrency}
        />
      </div>
    );
  }
}
