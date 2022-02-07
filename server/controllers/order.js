

export const newOrder = async(req,res) => {
    try {

        let order = req.body
        console.log(order);

    } catch (error) {

        res.status(500).json({message:error.message});
    }
}