const http = require("http");

const server = new http.Server();

let count = 1;

server.listen(1337, "127.0.0.1");

/* смотрим события сервера */
let emit = server.emit;
server.emit = function(event) {
    console.log(event);
    emit.apply(server, arguments);
};

server.on('request', function(req, response) {
    response.end("Hello world!" +
        "\n Visit:" + count++);
});
