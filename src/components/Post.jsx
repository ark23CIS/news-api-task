import React from "react";
import PropTypes from "prop-types";

import { Card } from "react-bootstrap";

function Post({ title, content, author, publishedAt, urlToImage }) {
  return (
    <div className="post">
      <Card style={{ color: "#000" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={urlToImage} />
        <div>{content}</div>
        <div>{author}</div>
        <div>{publishedAt}</div>
      </Card>
      {/* <div>{title}</div>
      <img src={urlToImage} alt="Photo" />
      <div>{content}</div>
      <div>{author}</div>
      <div>{publishedAt}</div> */}
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default Post;
