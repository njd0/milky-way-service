import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    postId: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },
    likes: [
        {type: String},
    ],
})

export default mongoose.model('Post', PostSchema);;