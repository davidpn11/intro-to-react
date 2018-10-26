import React, { Component } from "react";
import { render } from "react-dom";
import { ListItem } from "spectacle";

class App extends Component {
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
        <button onClick={() => this.upVote()} disabled={overLimit}>
          Click me
        </button>
        {!overLimit ? (
          <span>Clicked {count} times</span>
        ) : (
          <span>Botão foi clicado d+</span>
        )}
        <ul>
          {items.map(item => (
            <ListItem key={item.id} name={item.name} age={item.age} />
          ))}
        </ul>
      </div>
    );
  }
}

render(<App title="Primeiro Component" />, document.getElementById("root"));
