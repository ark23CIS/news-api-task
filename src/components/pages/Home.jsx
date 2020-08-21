import React from "react";
import Post from "../Post";
import PropTypes from "prop-types";

function Home({ articles }) {
  return (
    <>
      {articles &&
        articles.map((post, i) => (
          <Post key={`${i}_${post.author}`} {...post} />
        ))}
    </>
  );
}

Home.propTypes = {
  articles: PropTypes.array,
};

export default Home;
