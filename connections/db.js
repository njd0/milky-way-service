const mongoose = require("mongoose");

async function connect(config) {
    let client;
    const {
        DB_USER,
        DB_PASS,
        DB_NAME, 
        DB_PORT,
        DB_HOST,
    } = config;

    const dbIP = process.env.DB_IP ? process.env.DB_IP : DB_HOST;
    let connectionURI = "mongodb://";

    if (!DB_NAME || !DB_PORT || !dbIP) {
        throw new Error("Error connecting to DB");
    }

    if (DB_USER && DB_PASS) {
        connectionURI += `${DB_USER}:${DB_PASS}@`;
    }

    connectionURI += `${dbIP}:${DB_PORT}/${DB_NAME}`;

    console.log('Initialising DB...');
    
    const maxRetries = 5;
    let retries = 0;
    while (retries < maxRetries) {
      try {
        client = await mongoose.connect(connectionURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        retries = maxRetries;
      } catch (err) {
        ++retries;

        if (retries === maxRetries) {
          throw new Error("Failed connecting to DB");
        }

        console.log("Error connecting to DB, retrying...", err)
        const backoff = Math.pow(retries * 2, 2) * 1000;
        await new Promise(resolve => setTimeout(resolve, backoff));
      }
    }

    console.log("DB initialised")
    return client;
  }


export {
    connect,
}