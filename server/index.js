import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import {createServer} from "http";

const app = express();
const server = createServer(app);
const port = process.env.PORT || 4000

server.listen(port, (req, res)=>{
    console.log(`server started at ${port}`)
})