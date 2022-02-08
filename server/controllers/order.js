import { OrderSchema } from "../models/OrderSchema.js";


export const newOrder = async(req,res) => {
    try {

        let id = req.params.id;
        console.log(id);
        if(req.params.id === "undefined"){

            console.log("new user");
            let OrderId = Math.floor(Math.random() * 10000) + 1;
            const data = {
                orderDate: new Date(),
                customer:"Tom hanks",
                orderAmount: 0,
                orderId: OrderId
              };
            let { orderDate, customer, orderAmount, orderId } = data;
            const order = new OrderSchema({orderDate, customer, orderAmount, orderId});
            console.log(order);
           await order.save();
           res.status(200).json(order);
        
        }else{
            console.log("already user");
            const order = await OrderSchema.findOne({orderId:id});
            res.status(200).json(order);
           
        }
        
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