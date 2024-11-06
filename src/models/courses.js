import { Schema, model } from "mongoose";

const courseSchema = new Schema({
   title: {
    type: String,
    required: true,
    },
    description: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

export const CourseModel = model("Course", courseSchema);

