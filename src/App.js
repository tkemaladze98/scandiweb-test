import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Clothes from "./components/Clothes/Clothes";
import Nav from "./components/Nav/Nav";
import Tech from "./components/Tech/Tech";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: {
        label: "USD",
        symbol: "$",
        __typename: "Currency"
      }
    };
  }

  changeCurrency = (currency) => {
    this.setState({ selectedCurrency: currency })
  }

  render() {
    return (
      <Router>
        <header>
          <Nav changeCurrency={this.changeCurrency} />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage selectedCurrency={this.state.selectedCurrency} />} />
            <Route path="/clothes" element={<Clothes selectedCurrency={this.state.selectedCurrency} />} />
            <Route path="/tech" element={<Tech selectedCurrency={this.state.selectedCurrency} />} />
          </Routes>
        </main>
      </Router>
    );
  }
}
