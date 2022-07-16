const mongoos = require('mongoose');
const{schema}= mongoos;

const brand = schema({
brandId: Number,
brandName: String
});

module.exports={
brand
}