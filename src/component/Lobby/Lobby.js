import React from 'react';
import { Socket, getUserList } from '../../services/Socket';

class Lobby extends React.Component {


    componentDidMount () {
        Socket.emit("joinroom", {room: "lobby"}, test => {
          if(test) {
            console.log("maybe joined?");
            getUserList();
          }
        });
    }

    render() {
        return (
            <div className="container">
              <h3>Logged in as: { localStorage.getItem('currentUser') }</h3>
              
            </div>
        );
    }
};
export default Lobby;
