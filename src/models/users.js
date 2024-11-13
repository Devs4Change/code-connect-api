import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json"
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
}, { timestamps: true });


// Add plugin to convert mongoose to json
userSchema.plugin(toJSON);



export const UserModel = model("User", userSchema);
