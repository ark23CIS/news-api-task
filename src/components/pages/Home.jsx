import React from "react";
import Post from "../Post";
import PropTypes from "prop-types";
import Header from "../Header";
import { Container } from "react-bootstrap";

function Home({ articles }) {
  return (
    <>
      <Header />
      <Container>
        <div className="posts">
          {articles &&
            articles.map((post, i) => (
              <Post key={`${i}_${post.author}`} {...post} />
            ))}
        </div>
      </Container>
    </>
  );
}

Home.propTypes = {
  articles: PropTypes.array,
};

export default Home;
