import { Component } from "react";
import "./productCard.scss";

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.product?.gallery[0]} alt="" />
        <p>{this.props.product?.name}</p>
        {this.props.product?.prices.map(
          (price, index) =>
            price.currency.label === this.props.selectedCurrency.label && (
              <span key={index}>
                {price.currency.symbol}
                {price.amount}
              </span>
            )
        )}
      </div>
    );
  }
}