const express = require('express')
const mongoose = require('mongoose')
const todoRoute = require('./routes/todoRoute')
require('dotenv/config')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('home')
})

app.use('/api/todo',todoRoute)

app.listen(process.env.PORT || 5000)

async function main() {
    try {
        const res = await mongoose.connect(process.env.DB)
        const data = await res.default
        console.log(data.STATES.connected);
    } catch (error) {
        console.log(error.message);
    }
}
main()