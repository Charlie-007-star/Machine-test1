import Mongoose from "mongoose";

const itemSchema = new Mongoose.Schema({ 
    itemId: {
        type: Number,
        required: true,
    },
    itemName: {
        type: String,
        required: true,
    },
    unitPrice: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    orderId: {
        type: Number,
        required: true,
    }
   });

   export const ItemSchema = Mongoose.model("item", itemSchema);