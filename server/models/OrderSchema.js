import Mongoose from "mongoose";

const orderSchema = new Mongoose.Schema({
    
    orderDate: {
        type: Date,
        required: true,
    },
    orderId:{
        type: Number,
        required: true,
    },
    customer: {
        type: String,
        required: true,
    },
    orderAmount : {
        type: String,
        required: true,
    }
});

export const OrderSchema = Mongoose.model("order", orderSchema);