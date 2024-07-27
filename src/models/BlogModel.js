import mongoose from "mongoose";
const contentSchema = new mongoose.Schema({
    type: {
      type: String,
      required: true,
      enum: ['text', 'image', 'shell', 'subheading'],
    },
    value: {
      type: String,
      required: true,
    }
});

const blog = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: [contentSchema],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const BlogModel= new mongoose.model('blog',blog);