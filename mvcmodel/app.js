
const express = require("express")
const empRouter = require("./routes/employeeRoute")
const app = express()
console.log(empRouter)
//console.log(employees)
app.use(express.json())  // middle ware - built in middle - application level
app.use("/api/v1/",empRouter)
app.use(express.static(`${__dirname}/public`))

module.exports =app 