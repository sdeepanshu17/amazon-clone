const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },
    orders: [{
        orderNo: Number,
        items: [
            {
                title: String,
                price: Number,
                rating: Number,
                img: String
            }
        ], 
        amount: Number,
        date: String
    }]
});

module.exports = mongoose.model('order',OrderSchema);

// export default ItemSchema;