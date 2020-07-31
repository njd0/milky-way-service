let {createApp} = require("./server");

createApp().then(function startApp({app, config}) {
    app.listen(config.port, () => {
        console.log(`Running on port ${config.port}`);
    });
}).catch(function onError(err) {
    console.log("Failed to start API server", err);
    process.nextTick(() => process.exit(1));
});