import {Document} from 'mongoose'

export interface ITask extends Document {
    name: string,
    description: string,
    status?: boolean
}

// To access environment variables
declare global {
    namespace NodeJS
    {
        export interface ProcessEnv
        {
            NODE_ENV: "development" | "production" | "test";
            MONGO_URI: string
        }
    }
}