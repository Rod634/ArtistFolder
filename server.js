//requires
const express = require("express");
const nunjucks = require("nunjucks");

//express
server = express();

//public directory 
server.use(express.static('public'));

//template engine and nunjucks
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server
});

//port
server.listen(5200, function(){
    console.log("server is running!!");
});

//routes
server.get("/", function(req, res){
    return res.render("home");
});

server.get("/musics", function(req, res){
    return res.render("musics");
});