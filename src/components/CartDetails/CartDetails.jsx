import React, { Component } from "react";
import { Query } from "react-apollo";
import { getProduct } from "../../services/gql-services";
import "./cartDetails.scss";

export default class CartDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainPicture: this.props.selectedProduct.gallery[0],
      attributes: {},
      currentProduct: {},
    };
  }

  changeMainPicture = (pic) => {
    this.setState({ mainPicture: pic });
  };
  selectAttributes = (name, color) => {
    const tmpAttributes = this.state.attributes;
    tmpAttributes[name] = color;
    this.setState({ attributes: tmpAttributes });
  };
  addItemToCartStore = (item) => {
    item.selectedAttributes = this.state.attributes;
    item.count = 1;
    this.props.addCartItem(item);
  };
  render() {
    return (
      <Query query={getProduct(this.props.selectedProduct.id)}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          const { product } = data;
          return (
            <div className="cart-wrapper">
              <div className="all-images">
                {product.gallery.map((pic, index) => (
                  <img
                    key={index}
                    onClick={() => this.changeMainPicture(pic)}
                    src={pic}
                    alt=""
                  ></img>
                ))}
              </div>
              <div className="product-info">
                <img src={this.state.mainPicture} alt="" />
                <div className="information">
                  <h1>{product.brand}</h1>
                  <h2>{product.name}</h2>
                  <div>
                    {product.attributes.map((attribute, index) => (
                      <div key={index}>
                        <p>{attribute.name}</p>
                        <div
                          className={
                            attribute.name === "Color" ? "colors" : "sizes"
                          }
                        >
                          {attribute.items.map((item, i) =>
                            attribute.name === "Color" ? (
                              <div
                                key={i}
                                className={
                                  this.state.attributes[attribute.name] ===
                                  item.value
                                    ? "active"
                                    : ""
                                }
                                onClick={() =>
                                  this.selectAttributes(
                                    attribute.name,
                                    item.value
                                  )
                                }
                                style={{ backgroundColor: item.value }}
                              ></div>
                            ) : (
                              <div
                                key={i}
                                className={
                                  this.state.attributes[attribute.name] ===
                                  item.value
                                    ? "active"
                                    : ""
                                }
                                onClick={() =>
                                  this.selectAttributes(
                                    attribute.name,
                                    item.value
                                  )
                                }
                              >
                                <span>{item.value}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    ))}
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
                  <button
                    className="add"
                    onClick={() => this.addItemToCartStore(product)}
                  >
                    Add To Cart
                  </button>
                  {product.category === "clothes" ? (
                    <p>{product.description.slice(3, -4)}</p>
                  ) : (
                    <p>{product.description}</p>
                  )}
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}
