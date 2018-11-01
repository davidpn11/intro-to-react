import React, { Component } from "react";

class CommentsInput extends Component {
  state = {
    value: ""
  };

  changeComment = event => {
    this.setState({ value: event.target.value });
  };

  sendComment = () => {
    const { value } = this.state;
    this.props.addComment(value);
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="comments-input">
        <input
          type="text"
          placeholder="Envie um comentário"
          value={value}
          onChange={this.changeComment}
        />
        <button onClick={this.sendComment}>Enviar</button>
      </div>
    );
  }
}

export default CommentsInput;
