import mongoose from 'mongoose'

const subtodoSchema = new mongoose.Schema(
    {
        heading: {
            type: string,
            required: true,
            trim: true,
        },
        content: {
            type: string,
        },
        completed: {
            type: boolean,
            default: false,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true },
)

export const SubTodo = mongoose.model("SubTodo", subtodoSchema)