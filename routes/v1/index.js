
import {asyncMiddleware} from "../../utils/asyncMiddleware";
import getPosts from "../../controllers/v1/getPosts";
import seedPosts from "../../controllers/v1/seedPosts";

import express from "express";

export default function registerRoutes(deps) {
    const router = express.Router();

    // TODO make posts a model route param
    router.get("/posts", asyncMiddleware(getPosts, deps));
    router.post("/seed/posts", asyncMiddleware(seedPosts, deps))

    return router;
}