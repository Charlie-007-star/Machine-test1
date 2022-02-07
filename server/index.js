import express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import orderRoutes from "./routes/order.js";

const app = express();

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.use("/", orderRoutes);

const CONNECTION_URL = "mongodb+srv://sujin:12345@cluster0.pes5x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on Port:${PORT}`)))
    .catch(err => console.log(err.message));