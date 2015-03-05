var fs = require('fs')
    , http = require('http')
    , socketio = require('socket.io');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-type': 'text/html'});
  res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(3000, function() {
      console.log('Listening at: http://localhost:3000');
});

var io = socketio(server);
io.on('connection',function(socket){
    socket.on('message',function(data){
        console.log('Message Received: ', data);
        socket.broadcast.emit('message', data);
    })
});


/*
socketio.listen(server).on('connection', function (socket) {
  socket.on('message', function (msg) {
    console.log('Message Received: ', msg);
    socket.broadcast.emit('message', msg);
  });
});
*/

