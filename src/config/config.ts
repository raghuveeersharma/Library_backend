import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const _config = {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017",
};

export const config = Object.freeze(_config);
