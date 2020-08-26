import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { fetchNews, setNews } from "../redux/actions";
import { connect } from "react-redux";
import Home from "./pages/Home";

class App extends React.PureComponent {
  state = {
    query: this.props.query
  }

  filterArticles = (articles) => {
    let input = this.props.query;
    let dividers = ' ,.!;:&$?<>';
    input = input.toLowerCase().split(new RegExp(`[ ${dividers}]`));
    return articles.reduce((p,c) => {
      let words = `${c.title} ${c.content} ${c.author}`.toLowerCase().split(new RegExp(`[ ${dividers}]`));
      let counter = 0;
      for (let i = 0; i < input.length; i++) {
        if (words.includes(input[i])) counter++;
      }
      return counter === input.length ? [...p, c] : p;
    }, [])
  }
  
  componentDidMount() {
    this.props.fetchNews("general");
  }

  render() {
    return <Home articles={this.filterArticles(this.props.articles)} />;
  }
}

const mapStateToProps = (state) => ({ articles: state.articles, query: state.query });

export default connect(mapStateToProps, { fetchNews, setNews })(App);
