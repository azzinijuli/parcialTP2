import express, { urlencoded } from "express";
import mainRouter from "./routes/index.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", mainRouter);

app.listen(PORT, () => {
  console.log("Server running...");
});
