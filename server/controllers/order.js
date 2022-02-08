import { OrderSchema } from "../models/OrderSchema.js";


export const newOrder = async(req,res) => {
    try {

        let {customer,orderDate,orderAmount} = req.body;
        let OrderId = Math.floor(Math.random() * 10000) + 1;
        let data = {
            orderId:OrderId,
            customer,
            orderDate,
            orderAmount
        }
        let order = new OrderSchema({ ...data });
        let result = await order.save();
        res.status(200).json(result)
        
    } catch (error) {

        res.status(500).json({message:error.message});
    }
}


export const fetchOrders = async(req,res) => {
    
    try {
        
        const orders = await OrderSchema.find();
        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({message:error.message});
    }
}

export const deleteOrder = async(req,res) => {

    try {   

        const order = await OrderSchema.deleteOne({orderId:req.params.id});
        let response = await OrderSchema.find();
        res.status(200).json(response);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const fetchSingleOrder = async(req,res) => {

    try {

        const order = await OrderSchema.findOne({orderId:req.params.id});
        console.log("iwda vanno?");
        console.log(order);
        res.status(200).json(order);

    } catch (error) {

        res.status(500).json({message:error.message});
    }
}

export const orderAmount = async(req,res) => {

    try {

        let { orderId, total } = req.body;
        console.log(req.body);
        console.log("vanneeeeeeeeeeeeeeee");
        let order = await OrderSchema.findOne({orderId:orderId});
        order.orderAmount = total;
        console.log(order);
        await order.save();
        res.status(200).json(order);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
}