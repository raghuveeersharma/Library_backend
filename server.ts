import app from "./src/app";
import { config } from "./src/config/config";
import connectDB from "./src/config/db";

const startServer = async () => {
  // server start function

  await connectDB(); // connext to DATA BASE

  const port = config.port || 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

connectDB(); // connext to DATA BASE

startServer(); // server start function call
