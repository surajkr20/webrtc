import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 4000;

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Allow React frontend
    methods: ["GET", "POST"],
  },
});

server.listen(port, (req, res) => {
  console.log(`server started at ${port}`);
});
