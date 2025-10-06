import type { Response } from "express";
import { User } from "../user/user.model.js";
import type { IAuth } from "./Auth.interface.js"

const login = async (payload: IAuth, res: Response) => {
    const {email, password} =payload;

    const isUserExist = await User.findOne({email})
    if(!isUserExist){
        res.status(400).json({
            status: "error",
            message: "user doesn't exist"
        })
    }
    return isUserExist;
}


export const AuthServices = {
    login
}