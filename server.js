const http = require("http");

const serveur = http.createServer((request, response)=>{
    response.end("<h1>Hello Node !!!!</h1>\n")
});
serveur.listen(3000)