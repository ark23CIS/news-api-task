import React from "react";
import Post from "../Post";
import PropTypes from "prop-types";
import Header from "../Navbar";
import { Container } from "react-bootstrap";
import { Grid } from "@material-ui/core";

function Home({ articles }) {
  return (
    <>
      <Header />
      <Container>
        <Grid container alignItems="stretch">
          <div className="posts">
            {articles &&
              articles.map((post, i) => (
                <Grid key={`${i}_${post.title}`} item xs={12}>
                  <Post {...post} />
                </Grid>
              ))}
          </div>
        </Grid>
      </Container>
    </>
  );
}

Home.propTypes = {
  articles: PropTypes.array,
};

export default Home;
