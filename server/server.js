const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootRouter = require("./src/routes/index");
const sequelize = require("./src/config/connectDatabase");
require("dotenv").config();
let cors = require("cors");
const app = express();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const publicPath = path.join(__dirname, "./public");
app.use("/public", express.static(publicPath));
app.use("/api/v1", rootRouter);

app.get("/", (req, res) => {
    res.send("From ptnm with love!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is running in port: ", PORT);
    try {
        sequelize.authenticate();
        console.log("Connect sucessfully");
    } catch (e) {
        console.log("Connect fail.");
    }
});
