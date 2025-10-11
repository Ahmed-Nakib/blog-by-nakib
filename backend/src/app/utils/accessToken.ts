import jwt from "jsonwebtoken";


export const createAccessToken = (payload: any) => {
    return jwt.sign(payload, "secret",{expiresIn:"1h"})
}

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, "secret");
}