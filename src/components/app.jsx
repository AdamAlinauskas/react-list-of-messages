import React, { Component } from "react";
import Message from "./message";

class MessageToSend {
  isFor = "";
  extraGreeting = "";

  constructor(isFor, extraGreeting) {
    this.isFor = isFor;
    this.extraGreeting = extraGreeting;
  }
}

const listOfMessages = [
  new MessageToSend("Adam", "How are you?"), //function 0
  new MessageToSend("Kai", "What's up dude"), //function 1
  new MessageToSend("Roger", "YO!") //function 2
];

listOfMessages.push(new MessageToSend("Lateef", "SUP"));
listOfMessages.push(new MessageToSend("Nahom", "SUP!!!"));

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Messges</h1>
        </header>
        <main>
          {listOfMessages.map(function(theMessage, index) {
            console.log(theMessage);
            return (
              <Message
                key={index}
                isFor={theMessage.isFor}
                extraGreeting={theMessage.extraGreeting}
              />
            );
          })}
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
