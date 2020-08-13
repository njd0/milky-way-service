import mongoose from "mongoose";

const Profile = mongoose.Schema({
    profileId: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Profile', Profile);;