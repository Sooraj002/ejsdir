const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req,res) => {
    res.render("home");    
});

app.get("/ig/:username", (req,res) => {
    let { username } = req.params;
    const instadata = require("./data.json");
    const data = instadata[username];
    res.render("instagram.ejs", { data });    
    console.log(data);
});

app.listen(port , () => {
    console.log(`listening to port ${port}`);
});
