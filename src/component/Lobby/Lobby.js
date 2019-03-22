import React from 'react';
import { Socket } from '../../services/Socket';

class Lobby extends React.Component {
    componentDidMount () {
        Socket.emit("joinroom", {room: "lobby"}, test => {
          if(test) {
            console.log("Joined Lobby");
            Socket.emit("rooms");
          }
        });
    }

    render() {
        return (
            <div className="container text-center h-100 w-75" >
              <h1 className="m-5 ">Welcome to Lobby</h1>
                <div className="text-left border bg-light text-dark h-50">
                        This is coming from a abow, look up!
                </div>
                <form>
                  <input type="text" className="form w-100 "></input>
                  <button className="btn btn-dark">Send</button>
                </form>
            </div>
        );
    }
};
export default Lobby;
