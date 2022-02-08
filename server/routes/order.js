import  express  from "express";

import { newOrder,fetchOrders,deleteOrder,fetchSingleOrder,orderAmount } from "../controllers/order.js";
import { item,fetchItems,deleteItem, editItem, updateItem,currentItem } from "../controllers/item.js";

const router = express.Router();

router.post('/home',newOrder);
router.post('/itemm',item);
router.get('/item/:id',fetchItems);
router.get('/',fetchOrders);
router.post('/:id',deleteOrder);
router.post('/item/:id',deleteItem);
router.post('/home/:id',fetchSingleOrder);
router.post('/editItem/:id',editItem);
router.post('/updateItem',updateItem);
router.get('/editItem/:id',currentItem);
router.post('/orderAmount',orderAmount);




export default router;