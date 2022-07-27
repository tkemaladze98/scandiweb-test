import { Component } from 'react'
import { getAllProducts } from './services/gql-services'
import { request } from 'graphql-request'
import { Query } from 'react-apollo'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      errorMessage: "",
      data: []
    };
  }

  render() {
    request("http://localhost:4000/", getAllProducts()).then(data => this.setState({data:data.category.products}))
    return (
      <>
      {this.state.data.length > 0 ? (
        this.state.data.map(product => (
          <p key={product.name}>{product.name}</p>
        ))
      ):(
        <p>loading...</p>
      )}
      </>
    )

  }
}
