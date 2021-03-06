import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './router/index'

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

app.use("/", router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`running on localhost:${PORT}`));