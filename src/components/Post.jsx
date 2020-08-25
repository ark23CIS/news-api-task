import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Post({ title, content, author, publishedAt, urlToImage }) {
  return (
    <div className="post">
      <Card style={{ color: "#000", height: "100%" }}>
        <Card.Title>{title}</Card.Title>
        <Card.Img src={urlToImage} />
        <Card.Text>{content}</Card.Text>
        <Card.Text>{author}</Card.Text>
        <Card.Text>{publishedAt}</Card.Text>
        {/*       
      <div>{content}</div>
      <div>{author}</div>
      <div>{publishedAt}</div> */}
      </Card>
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
