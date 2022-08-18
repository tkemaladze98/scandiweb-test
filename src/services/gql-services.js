import gql from "graphql-tag";

const getAllProducts = () => gql`
  query {
    category {
      name
      products {
        id
        attributes {
          name
        }
        name
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;

const getProductCategories = () => gql`
  query {
    categories {
      name
      products {
        id
        attributes {
          name
        }
        name
        inStock
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;
const getCategoryNames = () => gql`
  query {
    categories {
      name
    }
  }
`;
const getProductAttributes = (itemName) => gql`
query {
    product(id: "${itemName}") {            
      name            
      gallery
      prices {
        amount
        currency{
          label
          symbol
        }
      }
    }
}
 `;

const getCurrencies = () => gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

const getPrices = () => gql`
  query {
    category {
      products {
        id
        prices {
          currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`;
const getProduct = (productId) => gql`
query {
    product(id: "${productId}") {
      name
      inStock
      gallery
      description
      category
      attributes {
        
        name
        items {
          id
          value
          displayValue
        }
      }
      prices {
        amount
        currency{
          label 
          symbol
        }
      }
      brand
    }
} 
`;

export {
  getAllProducts,
  getProductCategories,
  getCategoryNames,
  getProductAttributes,
  getCurrencies,
  getPrices,
  getProduct,
};
