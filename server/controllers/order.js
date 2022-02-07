import { OrderSchema } from "../models/OrderSchema.js";


export const newOrder = async(req,res) => {
    try {

       let {orderDate, customer, orderAmount} = req.body;
       let orderId = Math.floor(Math.random() * 10000) + 1;
       const order = new OrderSchema({orderDate,customer,orderAmount,orderId});
       console.log(order);
       await order.save();
       res.status(200).json(order);

    } catch (error) {

        res.status(500).json({message:error.message});
    }
}


export const fetchOrders = async(req,res) => {
    try {
        console.log("fetching orders");
        const orders = await OrderSchema.find();
        console.log(orders);
        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({message:error.message});
    }
}