const express = require('express')
const chokidar = require('chokidar');
const app = express()
var http = require('http').createServer(app);
const io = require('socket.io')(http);

const port = 8080
const sourceDir = './docs';

app.use(express.static(sourceDir))

http.listen(port, () => {
  console.log(`App running at http://localhost:${port}`)
})

chokidar.watch(sourceDir).on('all', (event, path) => {
  console.log('chokidar event:', event, path);
  io.emit('reload');
});
