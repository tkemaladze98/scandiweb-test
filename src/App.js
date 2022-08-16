import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Clothes from "./components/Clothes/Clothes";
import Nav from "./components/Nav/Nav";
import Tech from "./components/Tech/Tech";
import Cart from "./components/CartDetails/CartDetails"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: {
        label: "USD",
        symbol: "$",
        __typename: "Currency"
      },
      selectedProduct: {}
    };
  }

  changeCurrency = (currency) => {
    this.setState({ selectedCurrency: currency })
  }

  selectProduct = (product) => {
    this.setState({ selectedProduct: product })
  }

  render() {
    return (
      <Router>
        <header>
          <Nav changeCurrency={this.changeCurrency} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage selectProduct={this.selectProduct} selectedCurrency={this.state.selectedCurrency} />} />
            <Route path="/clothes" element={<Clothes selectProduct={this.selectProduct} selectedCurrency={this.state.selectedCurrency} />} />
            <Route path="/tech" element={<Tech selectProduct={this.selectProduct} selectedCurrency={this.state.selectedCurrency} />} />
            <Route path="/cart" element={<Cart selectedProduct={this.state.selectedProduct} selectedCurrency={this.state.selectedCurrency} />} />
          </Routes>
        </main>
      </Router>
    );
  }
}
