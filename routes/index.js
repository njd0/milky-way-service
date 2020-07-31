import express from "express";
import v1Router from "./v1";
import healthCheck from "../controllers/healthCheck";

export default function registerRoutes(dependencies) {
    const router = express.Router();
    router.get("/health-check", healthCheck);
    router.use("/v1",v1Router(dependencies));
    return router;
}