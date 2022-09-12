import express from 'express';
import {router} from "./src/routes/route";
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import {errorHandler} from "./src/middleware/error";

const PORT = 3000;
const app = express();

app.use(cors());

app.use(bodyParser.json());
mongoose.connect('mongodb+srv://admin:admin123@cluster0.ndyjwui.mongodb.net/login').then(() => {
    console.log('Connect success!')
}).catch(e => {
    console.log(e);
})
app.use('', router);
app.use(cors("*"));

app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
