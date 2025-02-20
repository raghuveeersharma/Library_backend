import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const _config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.MongoDBURI,
  env: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
