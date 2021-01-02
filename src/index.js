IS_LOCALHOST = location.origin.includes('localhost')

if(IS_LOCALHOST) {
  console.log('running in dev mode, auto reload enabled');

  const socketIO = document.createElement('script');
  socketIO.src = "/socket.io/socket.io.js";
  socketIO.onload = function() {
    const socket = io();
    socket.on('reload', () => {
      location.reload();
    })
  }
  document.body.appendChild(socketIO);
}
