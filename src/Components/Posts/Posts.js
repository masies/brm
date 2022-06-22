import React from "react";
import { Row, Col, Table  } from "react-bootstrap";
function Posts(postData) {

  return (
    <Table striped bordered hover variant="light">
  <thead>
    <tr>
      <th>date</th>
      <th>Social Media</th>
      <th>Author</th>
      <th>Text (linkable)</th>
      <th>Sentiment</th>
      <th># of Like</th>
      <th># of Comments</th>
      <th># of Share</th>
    </tr>
  </thead>
  <tbody>
    {postData.postData.posts.map((post,i) => {
        return (
          <tr key={post.id}>
            <td>{new Date(post.created_at.toString()).toLocaleDateString("en-US")}</td>
            <td>{post.social_media}</td>           
            <td>{post.author}</td>
            <td>{post.body}</td>
            <td>{post.sentiment}</td>
            <td>{post.n_likes}</td>
            <td>{post.n_comments}</td>
            <td>{post.n_shares}</td>
          </tr>
        );
      })}
  </tbody>
</Table>
  );
}

export default Posts;