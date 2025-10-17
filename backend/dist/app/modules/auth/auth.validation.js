import { z } from "zod";
export const updatePasswordValidation = z.object({
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
    otp: z
        .string()
        .min(4, { message: "OTP must be at least 4 digits" }),
});
//# sourceMappingURL=auth.validation.js.map