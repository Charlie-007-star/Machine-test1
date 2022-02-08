import { ItemSchema } from "../models/ItemSchema.js";

export const item = async(req,res) => {
    try {
        
        const {itemName,unitPrice,quantity,orderId} = req.body;
        let itemId = Math.floor(Math.random() * 10000) + 1;
        const item = new ItemSchema({itemId,itemName,unitPrice,quantity,orderId})
        await item.save();
        console.log(item);
        res.status(200).json(item);

    } catch (error) {
        
        res.status(500).json({message:error.message});
    }
}

export const fetchItems = async(req,res) => {
    try {
        const id = req.params.id;
        console.log("order Id");
        console.log(id);
        const items = await ItemSchema.find({orderId:id});
        console.log(items);
        res.status(200).json(items);

    } catch (error) {
        
        res.status(500).json({message:error.message});
    }
}

export const deleteItem = async(req,res) => {
    
    try {

        const item = await ItemSchema.deleteOne({itemId:req.params.id});
        let response = await ItemSchema.find();
        res.status(200).json(response);

    } catch (error) {

        res.status(500).json({message:error.message});
    }
}

export const editItem = async(req,res) => {
    
        try {
            console.log(req.params.id);
            let response = await ItemSchema.findOne({itemId:req.params.id});
            console.log(response);
            res.status(200).json(response);
    
        } catch (error) {
    
            res.status(500).json({message:error.message});
        }
}

export const updateItem = async(req,res) => {
        
        try {
            
            const {itemName,unitPrice,quantity,orderId,itemId} = req.body;
            const item = await ItemSchema.updateOne({itemId:req.params.id},{itemName,unitPrice,quantity,orderId,itemId});
            console.log(item);
            res.status(200).json(item);
        
        } catch (error) {
            
            res.status(500).json({message:error.message});
        }
}

export const currentItem = async(req,res) => {
    
    try {
        console.log(req.params.id);
        let response = await ItemSchema.findOne({itemId:req.params.id});
        console.log(response);
        res.status(200).json(response);

    } catch (error) {

        res.status(500).json({message:error.message});
    }
}