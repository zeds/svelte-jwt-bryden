'use strict';

module.exports = {

  register(/*{ strapi }*/) {},

  bootstrap({ strapi }) {
    var io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        //origin: "http://localhost:5000",
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
    });

    io.on('connection', function(socket) {
      console.log("Connection established!");
      socket.on('join', (message,username) => {
        console.log('chat message =',message,username);

        //broadcast(except the sender)
        //socket.broadcast.emit('chat message', {
        //  username: username,
        //  message: message
        //})

        ////everyone
        io.emit('chat message', {
          username: username,
          message: message
        })

      });
    });
  }
}
