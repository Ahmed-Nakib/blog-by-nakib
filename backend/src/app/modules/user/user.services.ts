import type { Request, Response } from "express";
import { User } from "./user.model.js";
import { encryptPassword } from "../../utils/password.js";
import { sslCommarze } from "../../utils/sslcommarze/sslCommarze.js";

const createUser = async (req: Request, res: Response) => {

    const createdUser = await User.insertOne({
        ...req.body,
        password: await encryptPassword(req.body.password)
    });

    const paymentData = await sslCommarze({
        name: createdUser.name,
        email: createdUser.email
    });
    console.log(paymentData);
    return {
        user: createdUser,
        payment: {
            status: paymentData.status,
            GatewayPageURL: paymentData.GatewayPageURL,
        }
    };
}


export const UserServices = {
    createUser
}