let {createApp} = require("./server");

createApp().then(function startApp({app, config}) {
    app.listen(config.PORT, () => {
        console.log(`Running on port ${config.PORT}`);
    });
}).catch(function onError(err) {
    console.log("Failed to start API server", err);
    process.nextTick(() => process.exit(1));
});