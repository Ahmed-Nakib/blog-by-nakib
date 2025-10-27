import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status-codes";
import { PaymentServices } from "./payment.services.js";
const success = catchAsync(async (req, res, next) => {
    const email = req.query.email;
    const updateUserInfo = await PaymentServices.success(email);
    res.status(httpStatus.OK).json(updateUserInfo);
});
export const PaymentController = {
    success,
};
//# sourceMappingURL=payment.controller.js.map