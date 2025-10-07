import express from "express";
import bodyParser from "body-parser";
import productRoutes from "./routes/productRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./utils/errorHandler.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello World! Express.js RESTful API is running 🚀");
});

app.use("/api/products", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
