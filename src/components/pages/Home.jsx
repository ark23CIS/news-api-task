import React from "react";
import Post from "../Post";
import PropTypes from "prop-types";
import Header from "../Header";
import { Container } from "react-bootstrap";
import { Grid } from "@material-ui/core";

function Home({ articles }) {
  return (
    <>
      <Header />
      <Grid container spacing={2} alignItems="stretch">
        <div className="posts">
          {articles &&
            articles.map((post, i) => (
              <Grid key={`${i}_${post.title}`} item xs={12} sm={4}>
                <Post key={`${i}_${post.author}`} {...post} />
              </Grid>
            ))}
        </div>
      </Grid>
    </>
  );
}

Home.propTypes = {
  articles: PropTypes.array,
};

export default Home;
