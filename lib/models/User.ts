import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ['user', 'admin', 'vip', 'agent'],
            default: 'user',
        },
        balance: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

// We check if the model exists before compiling it to avoid 
// an OverwriteModelError in Next.js development mode.
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
