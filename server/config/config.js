// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const envProps = process.env;
module.exports = {
  port: envProps.SERVER_PORT || 8080,
  env: envProps.NODE_ENV || 'development',
  mongo: {
    host: envProps.MONGODB_URI,
    port: envProps.MONGO_PORT,
    isDebug: envProps.MONGOOSE_DEBUG
  }
};
