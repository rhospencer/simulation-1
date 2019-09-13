require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const {SERVER_PORT} = process.env
const {CONNECTION_STRING} = process.env
const ctrl = require('./controller')

app.use(express.json())

// ENDPOINTS

app.get('/api/inventory', ctrl.getItems)
app.post('/api/product', ctrl.addItem)
app.delete('/api/product/:id', ctrl.deleteItem)




massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
})
.catch(err => {
    console.log(err)
})

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))