require('dotenv').config()

const express = require('express')
const noteRoutes = require('./routes/notes')

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

// listen for requests
app.listen(process.env.PORT, () => console.log('listening on port 3000'))