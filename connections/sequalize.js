const { Sequelize } = require('sequelize');

function connect(config) {
    const {
        DB_USER,
        DB_PASS,
        DB_NAME, 
        DB_PORT,
        DB_HOST,
    } = config;

    let connectionURI = "postgres://";

    if (!DB_NAME || !DB_PORT || !DB_HOST) {
        throw new Error("Error connecting to DB");
    }

    if (DB_USER && DB_PASS) {
        connectionURI += `${DB_USER}:${DB_PASS}@`;
    }

    connectionURI += `${DB_HOST}:${DB_PORT}/${DB_NAME}`;

    console.log("connectionURI", connectionURI)

    // TODO setup exponential backoff for connects
    // start at 1 second
    // try max 5 - 10 times
    const sequelize = new Sequelize(connectionURI);

    return sequelize;
}


export {
    connect,
}