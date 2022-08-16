import React, { Component } from "react";
import "./cartDetails.scss";

const sizes = ["XS", "S", "M", "L"];

const colors = ["grey", "black", "green"];
export default class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPicture: this.props.selectedProduct.gallery[0],
      selectedSize: null,
      selectedColor: null,
    };
  }

  changeMainPicture = (pic) => {
    this.setState({ mainPicture: pic });
  };
  selectSize = (size) => {
    this.setState({ selectedSize: size });
  };
  selectColor = (color) => {
    this.setState({ selectedColor: color });
  };
  render() {
    console.log(this.props.selectedProduct);
    return (
      <div className="cart-wrapper">
        <div className="all-images">
          {this.props.selectedProduct.gallery.map((pic) => (
            <img
              onClick={() => this.changeMainPicture(pic)}
              src={pic}
              alt=""
            ></img>
          ))}
        </div>
        <div className="product-info">
          <img src={this.state.mainPicture} alt="" />
          <div className="information">
            <h2>{this.props.selectedProduct.name}</h2>
            <div>
              <p>Size:</p>
              <div className="sizes">
                {sizes.map((size) => (
                  <div
                    className={this.state.selectedSize === size ? "active" : ""}
                    onClick={() => this.selectSize(size)}
                  >
                    <span>{size}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>Color:</p>
              <div className="colors">
                {colors.map((color) => (
                  <div
                    className={
                      this.state.selectedColor === color ? "active" : ""
                    }
                    onClick={() => this.selectColor(color)}
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <p>Price:</p>
              {this.props.selectedProduct.prices.map(
                (price, index) =>
                  price.currency.label ===
                    this.props.selectedCurrency.label && (
                    <p key={index}>
                      {price.currency.symbol}
                      {price.amount}
                    </p>
                  )
              )}
            </div>
            <button className="add">Add To Cart</button>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
              animi saepe qui. Veritatis aspernatur repellat quas explicabo
              dignissimos vel blanditiis. Vel quibusdam nobis beatae molestiae,
              voluptas veritatis sunt facilis qui?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
