const express = require('express');
const cors=require('cors')
const dbConnection =require("./dataBase/dbConnection")
const app = express();
const port = 8089


app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}))
app.use(express.json())


app.use("/task",require("./router/taskRouter"));
app.use("/progres",require("./router/progressRouter"));
app.use("/admin",require("./router/adminRouter"));
app.use("/user",require("./router/userRouter"));
app.use("/project",require("./router/projectRouter"))
app.use("/assignTask" , require("./router/taskAssignRouter"));


app.listen(port, () => {
    console.log(`http://localhost:${port}!`)
    dbConnection()
})