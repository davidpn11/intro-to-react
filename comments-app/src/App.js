import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import * as data from "./comments.json";
import CommentsList from "./CommentsList";
import CommentsInput from "./CommentsInput";
import uuid from "uuid";
import Loader from "./Loader";
function makeComment(text) {
  return {
    id: uuid.v4(),
    user: {
      name: "John Doe",
      profile:
        "https://uploads.codesandbox.io/uploads/user/b664cc48-35d4-4c7d-924f-43714f6aad1c/31kr-man2.svg"
    },
    text
  };
}
class App extends Component {
  state = {
    isLoading: true,
    comments: []
  };

  addComment = commentText => {
    this.setState(prev => ({
      comments: [...prev.comments, makeComment(commentText)]
    }));
  };

  componentDidMount() {
    fetch("https://comments-api.now.sh/comments")
      .then(res => res.json())
      .then(comments =>
        this.setState({ comments }, () => this.setState({ isLoading: false }))
      );
  }

  render() {
    const { comments, isLoading } = this.state;
    return (
      <div className="wrapper">
        {isLoading ? <Loader /> : null}
        <CommentsList comments={comments} />
        <CommentsInput addComment={this.addComment} />
      </div>
    );
  }
}

export default App;
