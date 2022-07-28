import React, { Component } from "react";
import { Query } from "react-apollo";
import { getCurrencies } from "../../services/gql-services";
import "./rightNav.scss";

export default class RightNav extends Component {
  constructor() {
    super();
    this.state = {
      selectedCurrency: null,
      isCurrencyVisible: false,
    };
  }

  changeCurrency = (currency) => {
    this.setState({
      selectedCurrency: currency,
      isCurrencyVisible: !this.state.isCurrencyVisible,
    });
  };

  currencyVisibility = () => {
    this.setState({ isCurrencyVisible: !this.state.isCurrencyVisible });
  };
  render() {
    return (
      <div className="right-nav">
        <Query query={getCurrencies()}>
          {({ error, loading, data }) => {
            if (loading) return <p>loading ...</p>;
            if (error) return <p>error : {error.message}</p>;
            const { currencies } = data;
            return (
              <>
                <div>
                  <button onClick={this.currencyVisibility}>
                    {this.state.selectedCurrency === null
                      ? currencies[0].symbol
                      : this.state.selectedCurrency.symbol}
                    <svg
                      className={this.state.isCurrencyVisible ? "active" : ""}
                      width="8"
                      height="4"
                      viewBox="0 0 8 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3.5L4 0.5L7 3.5"
                        stroke="black"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {this.state.isCurrencyVisible && (
                    <ul>
                      {currencies.map((currency) => (
                        <li key={currency.label}>
                          <button onClick={() => this.changeCurrency(currency)}>
                            {currency.symbol} {currency.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <button className="cart-logo">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5613 3.87359C19.1822 3.41031 18.5924 3.12873 17.9821 3.12873H5.15889L4.75914 1.63901C4.52718 0.773016 3.72769 0.168945 2.80069 0.168945H0.653099C0.295301 0.168945 0 0.450523 0 0.793474C0 1.13562 0.294459 1.418 0.653099 1.418H2.80069C3.11654 1.418 3.39045 1.61936 3.47434 1.92139L6.04306 11.7077C6.27502 12.5737 7.07451 13.1778 8.00152 13.1778H16.4028C17.3289 13.1778 18.1507 12.5737 18.3612 11.7077L19.9405 5.50575C20.0877 4.941 19.9619 4.33693 19.5613 3.87365L19.5613 3.87359ZM18.6566 5.22252L17.0773 11.4245C16.9934 11.7265 16.7195 11.9279 16.4036 11.9279H8.00154C7.68569 11.9279 7.41178 11.7265 7.32789 11.4245L5.49611 4.39756H17.983C18.1936 4.39756 18.4042 4.49824 18.5308 4.65948C18.6567 4.81994 18.7192 5.0213 18.6567 5.22266L18.6566 5.22252Z"
                      fill="#43464E"
                    />
                  </svg>
                </button>
              </>
            );
          }}
        </Query>
      </div>
    );
  }
}
