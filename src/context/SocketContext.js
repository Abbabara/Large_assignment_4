import {createContext} from 'react';
import connectToSocketIoServer from 'socket.io-client';

const SocketContext = createContext({
    socket: connectToSocketIoServer('http://localhost:8080')
});

export default SocketContext;
