import express from "express";
import {asyncMiddleware} from "../../utils/asyncMiddleware";
import {routeValidaton} from "../../utils/routeValidaton";
import validation from "./validation";

import getPosts from "../../controllers/v1/getPosts";
import seedPosts from "../../controllers/v1/seedPosts";
import createPost from "../../controllers/v1/createPost";

export default function registerRoutes(deps) {
    const router = express.Router();

    // TODO make posts a model route param
    router.get("/posts", asyncMiddleware(getPosts, deps));
    router.post("/post", validation.createPost, routeValidaton(), asyncMiddleware(createPost, deps));
    router.post("/seed/posts", asyncMiddleware(seedPosts, deps));

    return router;
}