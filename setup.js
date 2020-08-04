import asynConfig from "./utils/asyncConfig";
import {connect} from "./connections/sequalize";
import postModelInit from "./models/post";

export default async function setup() {
    const config = asynConfig();
    console.log("THIS IS MY CONFIG", config)

    const sequalize = connect(config);

    // TODO init services here
    const post = await postModelInit(sequalize);
    console.log("MODELS", post === sequalize.models.Post, sequalize.models.Post);

    return {
        config,
        sequalize,
    };
}
