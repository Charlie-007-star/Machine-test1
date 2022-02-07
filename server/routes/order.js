import  express  from "express";

import { newOrder,fetchOrders } from "../controllers/order.js";
import { item,fetchItems } from "../controllers/item.js";

const router = express.Router();

router.post('/newOrder',newOrder);
router.post('/item',item);
router.get('/item/:id',fetchItems);
router.get('/',fetchOrders);




export default router;