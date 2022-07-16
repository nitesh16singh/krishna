const mongoos = require('mongoose');
 const  {Schema} = mongoos;

 const customers = Schema({

customerId: Number,
firstName: String,
lastName: String,
phone: Number,
email: String,
street: String,
City: String,
state: String,
zipCode: Number

 });

 
