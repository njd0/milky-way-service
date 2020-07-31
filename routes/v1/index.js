
const {asyncMiddleware} = require("../../utils/asyncMiddleware");
const getPosts = require("../../controllers/v1/getPosts");

import express from "express";

export default function registerRoutes(deps) {
    const router = express.Router();
    
    // TODO pass services to controlelr
    router.get("/posts", asyncMiddleware(getPosts));

    return router;
}