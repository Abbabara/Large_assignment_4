
import React, { Component } from 'react';
import { Socket , addUser, getUserList } from '../../services/Socket';
import Lobby from '../Lobby/Lobby';
class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        loggedIn: false,
        userName: ''
    };
  }

  onInput(e) {
    this.setState({
        userName: e.target.value
    });
  };

  /*componentDidMount(){
    console.log(Socket);
  }*/

  submitForm(e){
    e.preventDefault();
    console.log(this.state);
    addUser(this.state.userName).then(() => {
<<<<<<< HEAD
=======
      console.log("true: available");

      localStorage.setItem('currentUser', this.state.userName);

>>>>>>> 8141195dda65451fb3660ed5ca8e3895025832ae
      this.setState({
        loggedIn: true
      });

    }).catch(() => {
      alert("Username is not available!");
    });
    console.log(addUser(this.state.userName));
  }

  render() {

    if(!this.state.loggedIn){
      return(
        <div>
          <form className="text-center" onSubmit={ e => this.submitForm(e)} >
            <h1 className="m-5">Welcome to Chat.IO</h1>
            <h2>Enter username</h2>
            <input name="userName" className="form m-1 t-2" type="text" value={this.state.userName} onChange={e => this.onInput(e)} />
            <input className="btn btn-dark " type="submit"/>
          </form>
        </div>
      );
    }
    else{
      return(
        <Lobby />
      );
    }

  }

}

export default Login;
