import express from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import cookieparser from "cookie-parser";
import { env } from "./src/shared/env"
import { connectToMongoDB } from "./src/db/connection/mongoconnect";
import AccessRoute from "./src/route/access.route";
import { wrongRoute } from "./src/shared/resultHandling/result";

const app = express();

app.use(cookieparser());
const server = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/foodsystem/api/v1", AccessRoute);

//later123 need to add logfuncton
//later123 need to add a function for handling all the routes if there are many routes. 

app.use("/", (req, res) => {
    wrongRoute(res);
});

server.listen(env.port, async () => {
    console.log(`Server is running on port ${env.port}`);
    await connectToMongoDB();
});