import React from "react";
import PropTypes from "prop-types";

function Post({ title, content, author, publishedAt }) {
  return (
    <>
      <div>{title}</div>
      <div>{content}</div>
      <div>{author}</div>
      <div>{publishedAt}</div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
};

export default Post;
