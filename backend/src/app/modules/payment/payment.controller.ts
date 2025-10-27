import type { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes"
import { PaymentServices } from "./payment.services.js";

const success = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const email = req.query.email

    const updateUserInfo = await PaymentServices.success(email as string)

    res.status(httpStatus.OK).json(updateUserInfo)
})


export const PaymentController = {
    success,
}