import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Clothes from "./components/Clothes/Clothes";
import Nav from "./components/Nav/Nav";
import Tech from "./components/Tech/Tech";
import Cart from "./components/CartDetails/CartDetails";
import OrderCart from "./components/Cart/Cart";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: {
        label: "USD",
        symbol: "$",
        __typename: "Currency",
      },
      selectedProduct: {},
      cartItems: [],
    };
  }

  changeCurrency = (currency) => {
    this.setState({ selectedCurrency: currency });
  };

  selectProduct = (product) => {
    this.setState({ selectedProduct: product });
  };

  addCartItem = (item) => {
    const tmpCartItems = this.state.cartItems;
    tmpCartItems.push(item);
    this.setState({ cartItems: tmpCartItems });
  };

  updateCount = (index, status) => {
    let tmpCartItems = this.state.cartItems;
    if (status === "plus") {
      tmpCartItems[index].count += 1;
    } else {
      if (tmpCartItems[index].count === 1) {
        tmpCartItems.splice(index, 1);
      } else {
        tmpCartItems[index].count -= 1;
      }
    }
    this.setState({ cartItems: tmpCartItems });
  };
  render() {
    return (
      <Router>
        <header>
          <Nav
            updateCount={this.updateCount}
            selectedCurrency={this.state.selectedCurrency}
            changeCurrency={this.changeCurrency}
            cartItems={this.state.cartItems}
          />
        </header>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  selectProduct={this.selectProduct}
                  selectedCurrency={this.state.selectedCurrency}
                />
              }
            />
            <Route
              path="/clothes"
              element={
                <Clothes
                  selectProduct={this.selectProduct}
                  selectedCurrency={this.state.selectedCurrency}
                />
              }
            />
            <Route
              path="/tech"
              element={
                <Tech
                  selectProduct={this.selectProduct}
                  selectedCurrency={this.state.selectedCurrency}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  addCartItem={this.addCartItem}
                  selectedProduct={this.state.selectedProduct}
                  selectedCurrency={this.state.selectedCurrency}
                />
              }
            />
            <Route
              path="/test"
              element={
                <OrderCart
                  cartItems={this.state.cartItems}
                  updateCount={this.updateCount}
                  selectedCurrency={this.state.selectedCurrency}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    );
  }
}
