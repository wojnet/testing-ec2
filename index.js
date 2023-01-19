const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/", (req, res) => {
    res.send("hello");
    res.end();
});

app.listen(PORT, () => {
    console.log("App running on port", PORT);
});