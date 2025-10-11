import jwt from "jsonwebtoken";
export const createAccessToken = (payload) => {
    return jwt.sign(payload, "secret", { expiresIn: "1h" });
};
export const verifyAccessToken = (token) => {
    return jwt.verify(token, "secret");
};
//# sourceMappingURL=accessToken.js.map