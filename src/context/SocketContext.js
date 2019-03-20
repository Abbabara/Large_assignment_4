import {createContext} from 'react';
import connectToSocketIoServer from 'socket.io-client';

const SocketContext = createContext({
    socket: connectToSocketIoServer('http://localhost:3500')
});

export default SocketContext;