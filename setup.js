import asynConfig from "./utils/asyncConfig";
import {connect} from "./connections/db";
import initServices from "./services";

export default async function setup() {
    const config = asynConfig();
    console.log("THIS IS MY CONFIG", config)

    const client = await connect(config);

    const services = initServices();

    return {
        client,
        config,
        services,
    };
}
