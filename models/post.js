import mongoose from "mongoose";

const Post = mongoose.Schema({
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
        {type: String, ref: 'Profile'},
    ],
}, { 
    timestamps: true,
});


export default mongoose.model('Post', Post);;