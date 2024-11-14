import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const _config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.MongoDBURI,
};

export const config = Object.freeze(_config);
