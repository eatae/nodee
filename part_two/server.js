const http = require("http");
const url = require("url");

const server = new http.Server(function(req, res){
    /* получаем значение из строки запроса */
    let urlParsed = url.parse(req.url, true);
    /* смотрим заголовки запроса */
    console.log(req.headers);
    /* устанавливаем заголовки ответа */
    res.setHeader("Cache-control", "no-cache");
    res.statusCode = 200;

    /* response */
    res.end( urlParsed.query.message )
});

server.listen(1337, "127.0.0.1");
