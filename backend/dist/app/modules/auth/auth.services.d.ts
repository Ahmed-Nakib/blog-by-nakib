import type { Response } from "express";
import type { IAuth } from "./Auth.interface.js";
export declare const AuthServices: {
    login: (payload: IAuth, res: Response) => Promise<(import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    }, {}, {
        timestamps: true;
        versionKey: "";
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        name: string;
        email: string;
        password: string;
        avatar: string;
        isVerified: boolean;
        isPremium: boolean;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        "": number;
    }) | null>;
};
//# sourceMappingURL=auth.services.d.ts.map