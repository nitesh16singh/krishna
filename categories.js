const mongoose = require('mongoose');
const {schema}= mongoose;

const categories = schema({
categoryId: Number,
categoryName: String

});

module.exports={
    categories
    }