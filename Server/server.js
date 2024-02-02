import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoute.js";
import cors from "cors";

//configure env
dotenv.config();

//database connect
connectDB();

//rest object
const app = express();

//middleWare
app.use(cors());
app.use(express.json()); //to enable the json
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to E-commerce App",
  });
});

//Port
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(`server Running on ${PORT}`.bgCyan.white);
});

//0->normal
//1->admin
