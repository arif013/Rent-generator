const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const calculateAmountDue = require("./amountDue.js")


const userRouter = require("./routes/userRoutes.js")
app.use('/api', userRouter)

const rentRouter = require("./routes/rentRoutes.js")
app.use('/api', rentRouter)

app.get('/',(req, res)=>{
    res.send("HI")
})
app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})