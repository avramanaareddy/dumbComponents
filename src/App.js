 
import React, { Component } from "react";
import { AddPost } from "./AddPost";
import { Posts } from "./Posts";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPost />
        <Posts />
      </div>
    );
  }
}
export default App;
 