
import React, { Component } from 'react';
import { Socket , addUser, getUserList } from '../../services/Socket';

class Login extends Component {
  
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
  }

  render() {
    return (
      <form className="text-center" onSubmit={ e => this.submitForm(e)} >
        <h1 className="m-5">Welcome to Chat.IO</h1>
        <h2>Enter username</h2>
        <input name="userName" className="form " type="text" value={this.state.userName} onChange={e => this.onInput(e)} />
        <input className="btn btn-dark m-1" type="submit"/>
      </form>
    );
  }

}

export default Login;
