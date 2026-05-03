require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* Routes */
const studentRouter = require("./routes/students");
app.use("/student", studentRouter);

/* Health check route */
app.get("/", (req, res) => {
    res.send("Server is running...");
});

/* MongoDB Connection */
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("DB Connection Error:", err);
});

/* Server Start */
const PORT = process.env.PORT || 8070;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});