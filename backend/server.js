require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const noteRoutes = require('./routes/noteRoutes')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cors({
    origin: `http://localhost:${process.env.PORT_APP}`
}))

// routes
app.use('/api/app', noteRoutes)

mongoose.connect(process.env.MONG_URI)
    .then((result) => {
        console.log('DB Connection: OK')

        // listen for requests
        app.listen(process.env.PORT_SERVER, () => console.log(`Listening on Port ${process.env.PORT_SERVER}...`))
})
.catch((err) => console.log('DB Connection: False\n', err))