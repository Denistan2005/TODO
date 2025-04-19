const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const todoRoutes = require("./views/todoRoutes");
require("dotenv").config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", todoRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));