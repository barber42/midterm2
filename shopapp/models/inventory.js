var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	price: String,
	order: {type: Number, default:0 },
	photo: String

ProductSchema.methods.order = function(cb){
	this.order += 1;
	this.save(cb);
};

});




mongoose.model('Product',ProductSchema);
