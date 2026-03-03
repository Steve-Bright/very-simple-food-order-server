import _dotenv from "dotenv";
_dotenv.config();

export const env = {
    port:process.env.port || 3000,
    mongo: process.env.mongo || ""
}