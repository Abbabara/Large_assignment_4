import React from 'react';
import { Socket } from '../../services/Socket';

class Lobby extends React.Component {
    componentDidMount () {
        Socket.emit("joinroom", {room: "lobby"}, test => {
          if(test) {
            console.log("maybe joined?");
            Socket.emit("rooms");
          }
        });
    }

    render() {
        return (
            <div className="container">
              <h2>LOGGED IN!!!</h2>
            </div>
        );
    }
};
export default Lobby;
