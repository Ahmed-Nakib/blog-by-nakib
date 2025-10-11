import { User } from "../user/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createAccessToken, verifyAccessToken } from "../../utils/accessToken.js";
const login = async (payload, res) => {
    const { email, password } = payload;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
        res.status(400).json({
            status: "error",
            message: "email doesn't match"
        });
    }
    const isPasswordMatch = await bcrypt.compare(password, isUserExist?.password);
    if (!isPasswordMatch) {
        res.status(400).json({
            status: "error",
            message: "password doesn't match"
        });
    }
    const tokenPayload = {
        name: isUserExist?.name,
        email: isUserExist?.email,
        avatar: isUserExist?.avatar,
        isVerified: isUserExist?.isVerified,
        isPremium: isUserExist?.isPremium
    };
    const accessToken = createAccessToken(tokenPayload);
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false
    });
    return {
        accessToken
    };
};
const me = async (req, res) => {
    const isAccessToken = req.cookies.accessToken;
    if (!isAccessToken) {
        res.status(401).json({
            status: "error",
            message: "user is not logged in"
        });
    }
    const isVerifyAccessToken = verifyAccessToken(isAccessToken);
    return isVerifyAccessToken;
};
export const AuthServices = {
    login,
    me
};
//# sourceMappingURL=auth.services.js.map