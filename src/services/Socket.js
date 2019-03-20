import connectToSocketIoServer from 'socket.io-client';
export const Socket = connectToSocketIoServer("http://localhost:8080");

export const addUser = (user) => {
  return new Promise((resolve, reject) => {
    Socket.emit("adduser", user, function(available){
      if (available){
        resolve(true);
      }
      else{
        reject(false);
      }
    });
  })

}

export const getUserList = () => {
  Socket.emit("rooms");
}

Socket.on("roomlist", (data) => {
  console.log(data);
})
