var mongoose = require('mongoose');
var User = mongoose.model('User');
var Quote = mongoose.model('Quote');


module.exports ={
    login:function(req,res){
        User.find({name: req.body.name}, function(err, users){
            if(users.length < 1){
                User.create({name: req.body.name}, function(err, user){
                    req.session.user = user
                    res.json({user: user})
                })
            } else {
                req.session.user = users[0];
                res.json({user: users[0]})
            }
        })
    },

    checkSess:function(req,res){
        if(req.session.user == undefined){
            return res.json({user: null})
        }
        return res.json({user: req.session.user})
    },

    logOut(req,res){
        req.session.destroy()
        res.redirect('/');
    },

    addQuote: function(req,res){
        Quote.create(req.body, function(err, quote){
            Quote.find({}).sort('-createdAt').exec(function(err, quotes){
                res.json(quotes)
            })
        })
    },
    
    showQuotes: function(req,res){
        Quote.find({}).sort('-createdAt').exec(function(err, quotes){
            res.json(quotes)
        })
    },

    addLike: function(req,res){
        Quote.findOne({_id: req.params.id}).exec(function(err,quote){
            // console.log('hey', quote)
            quote.likes++;
            // console.log('hey after like', quote)
            quote.save(function(err){
                console.log("+++++++++++++=")
                console.log(quote)
                console.log("+++++++++++++=")
             res.json(quote)
            })
            
        })
    }
    

}