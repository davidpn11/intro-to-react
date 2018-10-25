import React, { Component } from "react";

class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      overLimit: false
    };
  }

  toggleState() {
    this.setState(prevState => ({
      count: prevState.count + 1,
      overLimit: prevState.count + 1 > 10 ? true : false
    }));
  }

  render() {
    const { count, overLimit } = this.state;
    return (
      <div>
        <h2>{this.props.title}</h2>
        <button onClick={() => this.toggleState()} disabled={overLimit}>
          Click me
        </button>
        {!overLimit ? (
          <span>Clicked {count} times</span>
        ) : (
          <span>Botão foi clicado d+</span>
        )}
      </div>
    );
  }
}

export default FirstComponent;
