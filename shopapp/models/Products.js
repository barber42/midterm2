var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
	name: String,
	price: String,
	order: {type: Number, default:0 },
	photo: String
});
mongoose.model('Product',ProductSchema);
