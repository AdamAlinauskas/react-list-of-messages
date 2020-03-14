import React, { Component } from "react";
import Message from "./message";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>List of cars</h1>
        </header>
        <main>
          <Message isFor="adam" extraGreeting="How are you?" />
          <Message isFor="Kai" />
          <Message isFor="Roger" />
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
