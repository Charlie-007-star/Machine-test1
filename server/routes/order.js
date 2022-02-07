import  express  from "express";

import { newOrder } from "../controllers/order.js";

const router = express.Router();

router.post('/newOrder',newOrder);



export default router;