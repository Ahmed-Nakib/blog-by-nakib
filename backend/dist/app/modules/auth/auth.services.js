import { User } from "../user/user.model.js";
const login = async (payload, res) => {
    const { email, password } = payload;
    const isUserExist = await User.findOne({ email });
    if (!isUserExist) {
        res.status(400).json({
            status: "error",
            message: "user doesn't exist"
        });
    }
    return isUserExist;
};
export const AuthServices = {
    login
};
//# sourceMappingURL=auth.services.js.map