import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fetchNews } from "../redux/actions";
import { connect } from "react-redux";
import Home from "./pages/Home";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchNews("general");
    console.log(this.props.fetchNews);
  }

  render() {
    return <Home articles={this.props.articles} />;
  }
}

const mapStateToProps = (state) => ({
  articles: state,
});

export default connect(mapStateToProps, { fetchNews })(App);
