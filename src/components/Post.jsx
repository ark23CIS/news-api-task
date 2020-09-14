import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

function Post({ title, content, author, publishedAt, urlToImage }) {
  return (
    <div className="post">
      <Card style={{ color: "#000", height: "100%" }} className="article-card">
        <Card.Title className="card__item">{title}</Card.Title>
        <Card.Img className="card__item" src={urlToImage} />
        <Card.Text className="card__item">{content}</Card.Text>
        <Card.Subtitle className="card__item">{author}</Card.Subtitle>
        <Card.Subtitle className="card__date">
          {publishedAt ? new Date(publishedAt).toUTCString() : ""}
        </Card.Subtitle>
      </Card>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  urlToImage: PropTypes.string,
};

export default Post;
