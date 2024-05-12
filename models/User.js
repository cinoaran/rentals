import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists'],
    },
    image: {
        type: String,
        default: 'https://cdn-icons-png.flaticon.com/512/147/147144.png'
    },
    bookmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Property'
        }],
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const User = models.User || model('User', userSchema);
export default User