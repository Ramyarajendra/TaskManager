import {ITask} from '../types/taskType'
import {model, Schema} from 'mongoose'

const taskSchema : Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

export default model<ITask>("Task", taskSchema)