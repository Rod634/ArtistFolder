//requires
const express = require("express");
const nunjucks = require("nunjucks");

//express
server = express();

//datas
const musics = require("./data");

//public directory 
server.use(express.static('public'));

//template engine and nunjucks
server.set("view engine", "njk");

nunjucks.configure("views", {
    express: server,
    autoescape: false
});

//port
server.listen(5200, function(){
    console.log("server is running!!");
});

//routes
server.get("/", function(req, res){
    const data = {
        image: "http://www.jeremyzuckermusic.com/sites/g/files/aaj4396/f/release/202007/ab67616d0000b2731be266b09bca400621d38743.jpg",
        title: "Jeremy Zucker",
        role: "Singer",
        description: 'Jeremy Zucker is an American singer-songwriter, best known for his songs "All the Kids Are Depressed" and "Comethru", having accumulated over 300 million streams on Spotify. <a href="https://en.wikipedia.org/wiki/Jeremy_Zucker" target="_blank">Wikipedia</a>',
        link: [
            { link: "https://www.instagram.com/jeremyzucker/", name: "Instagram"},
            { link: "https://twitter.com/jeremyzucker", name: "Twitter"},
            { link: "http://www.jeremyzuckermusic.com/", name: "Site"}
        ]
    }
    return res.render("home", { data });
});

server.get("/musics", function(req, res){
    return res.render("musics", { musics });
});

server.use(function(req, res) {
    const data = {
        image: "https://media.giphy.com/media/LoUSSkods6bVIUvWvd/giphy.gif",
        title: "Error 404",
        description: "Nothing but flowers here, sorry"
    }

    res.status(404).render("not-found", { data });
});