import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            validate: {
                validator: function (email) {
                    // Ensures valid email format
                    const emailmatch = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    return emailmatch.test(email);  // Return true if email is valid
                },
                message: "Please enter a valid email address",  // Error message if validation fails
            },
        },
        password: {
            type: string,
            required: true,
            minlength: 8,
            maxlength: 20,
            match: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/,
            // Ensures password has at least one uppercase, one number, and one special character
        },
    },
    { timestamps: true },
)

export const User = mongoose.model("User", userSchema)