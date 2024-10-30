import { Schema, model } from 'mongoose';
import toJSON from '@reis/mongoose-to-json';

// User model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

userSchema.plugin(toJSON);

const UserModel = model('User', userSchema);

export default UserModel;
