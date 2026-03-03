import express from "express";
import http from "http";
import { env } from "./src/shared/env"
import { connectToMongoDB } from "./src/db/mongoconnect";

const app = express();
const server = http.createServer(app);

server.listen(env.port, async () => {
    console.log(`Server is running on port ${env.port}`);
    await connectToMongoDB();
});