import React, { Component } from "react";
import { Query } from "react-apollo";
import { getCategoryNames } from "../../services/gql-services";
import { Link } from "react-router-dom";
import "./leftNav.scss";

export default class LeftNav extends Component {
  constructor() {
    super();
    this.state = {
      activeRoute:
        window.location.pathname === "/"
          ? "all"
          : window.location.pathname.split("/")[1],
    };
  }
  changeRoute = (route) => {
    this.setState({ activeRoute: route });
  };
  render() {
    return (
      <Query query={getCategoryNames()}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error:</p>;
          const { categories } = data;

          return (
            <ul className="left-nav">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.name === "all" ? "/" : category.name}
                    className={
                      this.state.activeRoute === category.name ? "active" : ""
                    }
                    onClick={() => this.changeRoute(category.name)}
                  >
                    {category.name.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          );
        }}
      </Query>
    );
  }
}
