
const EventEmmiter = require("events").EventEmitter;

const server = new EventEmmiter;

server.on("request", function(request){
    request.approved = true;
});

server.on("request", function(request){
    console.log(request);
});

server.on("error", function(){

});

server.emit('request', {from: "Клиент"});
server.emit("request", {from: "Ещё клиент"});

server.emit("error");
