const express = require("express");
const axios = require("axios");

const cors = require("cors")

const app = express();
app.use(cors())


app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.get("/users", (req, res) => {
    axios.get("https://randomuser.me/api/?page=1&results=10")
    .then(resp => {
        res.send(resp.data)
    })
})





app.listen(3001, () => {
    console.log("Server started at port 3001")
})

