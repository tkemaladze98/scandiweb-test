import { Component } from "react";
import { Query } from "react-apollo";
import { getProductCategories } from "../../services/gql-services";
import ProductCard from "../ProductCard/ProductCard";
import "./clothes.scss";

export default class Clothes extends Component {
  render() {
    return (
      <div className="clothes-category">
        <h1>CLOTHES</h1>
        <Query query={getProductCategories()}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error : </p>;
            const productData = data.categories.find(
              (category) => category.name === "clothes"
            ).products;
            return (
              <div className="cards-wrapper">
                {productData.map((product, index) => (
                  <ProductCard
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
