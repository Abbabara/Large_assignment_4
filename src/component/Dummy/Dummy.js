import React, { Component } from 'react';
import { Socket , addUser, getUserList } from '../../services/Socket';

class Dummy extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: ''
    };
  }
  onInput(e) {
    this.setState({
        userName: e.target.value
    });
  };

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
    console.log(Socket);

  }
  submitForm(e){

    e.preventDefault();
    console.log(this.state);
    addUser(this.state.userName).then(() => {
      console.log("true: available");
    }).catch(() => {
      console.log("false: not available");
    });
    console.log(addUser(this.state.userName));
    getUserList();
    /*
    SocketContext.emit("adduser", this.state.userName, function(available){
      if (available){
        console.log("user available!");
      }
      else{
        alert("Name already taken :(");
      }
    });
    */
  }


  render() {
    return (
      <form onSubmit={ e => this.submitForm(e)} >
        <p>Enter name</p>
        <input name="userName" type="text" value={this.state.userName} onInput={e => this.onInput(e)}/>
        <input type="submit"/>
      </form>
    );
  }

}

export default Dummy;
