const express = require('express')
const app = express()
const prisma = require("./prisma/index.js")
const cors = require('cors')

const port = 3000

require('dotenv').config()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const calculateAmountDue = require("./amountDue.js")


const userRouter = require("./routes/userRoutes.js")
app.use('/api', userRouter)

const rentRouter = require("./routes/rentRoutes.js")
app.use('/api', rentRouter)

app.get('/api/users-with-rents', async(req, res)=>{
    try {
        const users = await prisma.user.findMany({
            include: {
                totalRent: true,
            }
        });
        res.json(users)
    } catch (error) {
        res.status(500).json({ error: error.message });

    }
})

app.get('/',(req, res)=>{
    res.send("HI")
})
app.listen(port, ()=>{
    console.log(`app listening on port ${port}`)
})