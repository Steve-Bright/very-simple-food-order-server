import _bcrypt from "bcrypt";
import _jwt from "jsonwebtoken";
import { env } from "./env";

export const encode = (payload) => {
    return _bcrypt.hashSync(payload, Number(env.salt))
}

export const decode = (payload, hash) => {
    return _bcrypt.compareSync(payload, hash)
}

export const genToken = async(payload, type = TOKENTYPE.ACCESS) => {
    return _jwt.sign(
        {
            exp: type === TOKENTYPE.ACCESS ? accessTokenExpiryDuration() : refreshTokenExpiryDuration(),
            data: payload
        },
        env.jwtSecret
    )
}

export const jwtDecode = async(token) => {
    try{
        const decoded = _jwt.decode(token);
        return decoded;
    }catch(error){
        throw new Error("Invalid token" + error.message);
    }
}

const accessTokenExpiryDuration = () => {
    return Math.floor(Date.now() / 1000) + (60 * 60 * 24); // 1 day
}

const refreshTokenExpiryDuration = () => {
    return Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 7); // 7 days
}

export enum TOKENTYPE{
    ACCESS,
    REFRESH
}