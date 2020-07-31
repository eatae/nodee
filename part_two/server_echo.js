// http://127.0.0.1:1337/echo?message=hello

const http = require("http");
const url = require("url");


const server = new http.Server(function(req, res){
    let foo = "bar";
    /* получаем значение из строки запроса */
    let urlParsed = url.parse(req.url, true);
    console.log(urlParsed);

    if (urlParsed.pathname == '/echo' && urlParsed.query.message) {
        res.statusCode = 404;
        res.end( urlParsed.query.message )
    } else {
        res.statusCode = 404;
        res.end("Page not found");
    }
});
foo = 12;
server.listen(1337, "127.0.0.1");
