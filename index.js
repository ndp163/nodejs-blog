const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    res.send("Page INDEX");
})

app.get("/trang-chu", (req, res) => {
    res.send("Page trang chu");
})

app.listen(PORT, ()=> {
    console.log(`App is listening at http://localhost:${PORT}`);
});