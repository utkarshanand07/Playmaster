import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
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
            type: mongoose.Schema.Types.ObjectId,         // referencing user schema
            ref: 'User',
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,     // array of subtodos
                ref: 'SubTodo',
            }
        ],
    },
    { timestamps: true },
)

export const Todo = mongoose.model("Todo", todoSchema)