import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost"
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/'
  }),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
