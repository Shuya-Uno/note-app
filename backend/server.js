require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const noteRoutes = require('./routes/noteRoutes')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/app', noteRoutes)

mongoose.connect(process.env.MONG_URI)
    .then((result) => {
        console.log('DB Connection: OK')

        // listen for requests
        app.listen(process.env.PORT, () => console.log(`Listening on Port ${process.env.PORT}...`))
})
.catch((err) => console.log('DB Connection: False\n', err))