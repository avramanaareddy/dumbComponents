import React, { Component } from "react";
import "./styles.css";

export class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  componentWillMount() {
    console.log("mounting component");
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const Post = {
      title: this.state.title,
      body: this.state.body
    };
    console.log(Post);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Post)
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  render() {
    return (
      <div>
        <h1>Add Post </h1>
        <form onSubmit={this.onSubmit}>
          <label>Title:</label>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.onChange}
          />
          <br />
          <br />
          <lable>Body:</lable>
          <textarea
            name="body"
            onChange={this.onChange}
            value={this.state.body}
          ></textarea>
          <br />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
