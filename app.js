const express = require("express");
const app = express();
const cors = require("cors");

// Contains all routes in one file/directory
const AppRouter = require("./routes/AppRouter");

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));

// routes will be encapsulated inside of our AppRouter
app.use("/api", AppRouter);

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
