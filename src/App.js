import { Component } from 'react'
import { getAllProducts } from './services/gql-services'
import { Query } from 'react-apollo'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Query query={getAllProducts()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error : </p>;
          return (
            data.category.products.map(product => (
              <p key={product.name}>{product.name}</p>
            ))
          );
        }}
      </Query>
    )

  }
}
