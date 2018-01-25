var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
})
mongoose.model('User', UserSchema);

var QuoteSchema = new Schema({
    quote: String,
    created_by: String,
    likes: {type: Number, default: 0}
},
    {timestamps: true});

mongoose.model('Quote', QuoteSchema);
