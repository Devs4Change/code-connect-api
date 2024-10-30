import { Schema, model } from 'mongoose';
import toJSON from '@reis/mongoose-to-json';

// Course model
const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
}, { timestamps: true });

courseSchema.plugin(toJSON);

const CourseModel = model('Course', courseSchema);

export default CourseModel;

