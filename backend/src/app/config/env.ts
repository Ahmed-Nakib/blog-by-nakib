import dotenv from "dotenv"

dotenv.config();

type EnvType = {
    PORT: string;
}

const envVarsFn = (): EnvType => {
    const requiredEnVariables: string [] =[
        "PORT"
    ]

    requiredEnVariables.forEach((key: string) => {
        if(!process.env[key]){
            throw new Error(`Missing required environment variable ${key}`)
        }
    })

    return {
        PORT: process.env.PORT as string,
    }

};

export const envVars = envVarsFn(); 