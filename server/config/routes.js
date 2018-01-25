var users = require('./../controllers/users');
var path = require('path');

module.exports = function(app){
    app.post('/login', function(req,res){
        users.login(req,res);
    })

    app.get('/sess', function(req,res){
        users.checkSess(req,res);
    })

    app.get('/logout', function(req,res){
        users.logOut(req,res);
    })

    app.post('/addQuote', function(req,res){
        users.addQuote(req,res);
    })

    app.get('/showQuotes', function(req,res){
        users.showQuotes(req,res);
    })

    app.get('/addLike/:id', function(req,res){
        console.log(req.params.id);
        users.addLike(req,res);
    })

    app.all("**", (request, response) => { response.sendFile(path.resolve("./client/dist/index.html")) });

}