const express = require("express")

const app = express()


app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname})
})


app.listen(7001)