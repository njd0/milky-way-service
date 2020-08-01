
import {asyncMiddleware} from "../../utils/asyncMiddleware";
import getPosts from "../../controllers/v1/getPosts";

import express from "express";

export default function registerRoutes(deps) {
    const router = express.Router();

    // TODO pass services to controlelr
    router.get("/posts", asyncMiddleware(getPosts));

    return router;
}