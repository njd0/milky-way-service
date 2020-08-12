import Post from "../models/post";
import initPostService from "./post";

function initServices() {
    const post = initPostService(Post);

    return {
        post,
    }
}

export default initServices;