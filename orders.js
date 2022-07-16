const mongoos = require('mongoose');
const {schema}= mongoos;

const orders = schema({

orderId: [{ type: Schema.Types.ObjectId, ref: 'OrderItem' }],
customerId: [{ type: Schema.Types.objectId, ref: 'Customer' }],
orderStatus: {type:String, enum : ["true","false"]},
orderDate: Date,
requiredDAte:Date,
shippingDate:Date,
storeId: [{ type: Schema.Types.ObjectId, ref: 'Store' }],
staffId: [{ type: Schema.Types.ObjectId, ref: 'Staff' }], 
})