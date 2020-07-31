import express from "express";
import cors from "cors";
import setup from "./setup"
import routes from "./routes";

export async function createApp() {
    const dependencies = await setup();
    const {
        config,
    } = dependencies;

    const app = express();
    app.use(express.urlencoded({extended: true, limit: "10mb"}));
    app.use(express.json({limit: "10mb"}));

    app.use(cors());

    // Routes
    app.use(routes(dependencies));

    return {
        app,
        config,
        dependencies,
    };
}
