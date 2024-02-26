const express = require('express');
const cors=require('cors')
const dbConnection =require("./dataBase/dbConnection")
const app = express();
const port = 8089


app.use(cors())
app.use(express.json())


app.use("/",require("./router/router"))


app.listen(port, () => {
    console.log(`http://localhost:${port}!`)
    dbConnection()
})