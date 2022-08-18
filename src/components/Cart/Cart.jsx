import React, { Component } from "react";
import "./cart.scss";

export default class Cart extends Component {
  incrementCount = (index) => {
    this.props.updateCount(index, "plus");
  };
  decrementCount = (index) => {
    this.props.updateCount(index, "minus");
  };
  render() {
    return (
      <div className="cart-order-wrapper">
        <h1 className="cart-h">CART</h1>
        <div>
          {this.props.cartItems.length === 0 ? (
            <p>The cart is empty</p>
          ) : (
            this.props.cartItems.map((item, index) => (
              <div className="cart-info-div">
                <div className="price-div">
                  <h1>{item.brand}</h1>
                  <p>{item.name}</p>
                  {item.prices.map(
                    (price, i) =>
                      price.currency.label ===
                        this.props.selectedCurrency.label && (
                        <strong key={i}>
                          {price.currency.symbol}
                          {price.amount}
                        </strong>
                      )
                  )}
                  <div className="attributes">
                    {Object.keys(item.selectedAttributes).map((key) => (
                      <div>
                        <span>{item.selectedAttributes[key]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="count-div">
                  <button
                    onClick={() => this.incrementCount(index)}
                    className="plus"
                  >
                    +
                  </button>
                  <span>{item.count}</span>
                  <button
                    onClick={() => this.decrementCount(index)}
                    className="minus"
                  >
                    -
                  </button>
                </div>
                <div className="img-div">
                  <img src={item.gallery[0]} alt="" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
}
