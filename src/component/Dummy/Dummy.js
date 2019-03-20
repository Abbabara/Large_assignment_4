import React, { Component } from 'react';
import SocketContext from '../../context/SocketContext';

class Dummy extends Component {


  getName(){
    var person = prompt("Please enter your name. \nMust be shorter than 21 characters", "Anonymous");
      if(person == null || person.length > 21){
        alert("Invalid Name!");
        return this.getName();
      }
      else {
        return person;
      }
  }

  componentDidMount(){
    const { socket } = this.context;
    console.log(socket);

    socket.emit("adduser", this.getName(), function(available){
      if (available){
        console.log("user added!");
      }
      else{
        console.log("something went wrong");
        alert("Name already taken :(");
      }
    });
  }

  render() {
    return (
      <h1>CHAT WINDOES GOES HERE!</h1>
    );
  }

}


Dummy.contextType = SocketContext;

export default Dummy;
