import  express  from "express";

import { newOrder,fetchOrders,deleteOrder,fetchSingleOrder } from "../controllers/order.js";
import { item,fetchItems,deleteItem } from "../controllers/item.js";

const router = express.Router();

router.post('/order',newOrder);
router.post('/itemm',item);
router.get('/item/:id',fetchItems);
router.get('/',fetchOrders);
router.post('/:id',deleteOrder);
router.post('/item/:id',deleteItem);
router.post('/order/:id',fetchSingleOrder);




export default router;