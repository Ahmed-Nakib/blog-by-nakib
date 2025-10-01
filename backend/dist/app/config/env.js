import dotenv from "dotenv";
dotenv.config();
const envVarsFn = () => {
    const requiredEnVariables = [
        "PORT"
    ];
    requiredEnVariables.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Missing required environment variable ${key}`);
        }
    });
    return {
        PORT: process.env.PORT,
    };
};
export const envVars = envVarsFn();
//# sourceMappingURL=env.js.map