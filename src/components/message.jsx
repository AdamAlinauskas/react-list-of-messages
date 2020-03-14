import React, { Component } from "react";

class Message extends Component {
  render() {
    const isFor = this.props.isFor;
    const extraGreeting = this.props.extraGreeting;

    // const theMessage1 = "This is a message for: " + isFor + " " + extraGreeting;

    const theMessage = `This is a message for ${isFor} ${extraGreeting}`;

    return <h3>{theMessage}</h3>;
  }
}

export default Message;
