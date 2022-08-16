import { Component } from "react";
import { Query } from "react-apollo";
import { getProductCategories } from "../../services/gql-services";
import ProductCard from "../ProductCard/ProductCard";
import "./homePage.scss";

export default class HomePage extends Component {
  render() {
    return (
      <div className="all-category">
        <h1>ALL</h1>
        <Query query={getProductCategories()}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error : </p>;
            const productData = data.categories.find(
              (category) => category.name === "all"
            ).products;
            return (
              <div className="cards-wrapper">
                {productData.map((product, index) => (
                  <ProductCard
                    selectProduct={this.props.selectProduct}
                    key={index}
                    product={product}
                    selectedCurrency={this.props.selectedCurrency}
                  />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
