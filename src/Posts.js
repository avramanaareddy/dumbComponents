import React, { Component } from "react";
import "./styles.css";

export class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentWillMount() {
    console.log("mounting component");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data });
        console.log(data);
      });
  }
  render() {
    return (
      <div>
        <h1>Posts</h1>
        {this.state.posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
