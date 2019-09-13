require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT} = process.env
const {CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

// ENDPOINTS



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})
.catch(err => {
    console.log(err)
})

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))