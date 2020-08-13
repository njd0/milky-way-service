import Post from "../models/post";
import Profile from "../models/profile";
import initPostService from "./post";
import initProfileService from "./profile";


function initServices() {
    const post = initPostService(Post);
    const profile = initProfileService(Profile);

    return {
        post,
        profile,
    }
}

export default initServices;