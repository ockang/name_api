const express = require('express')
const bodyParser = require('body-parser')
const nameAPI = require('./api/name')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || '3000'
const mongo_url = process.env.DATABASE || 'mongodb://localhost:27017/names_api'

mongoose.connect(mongo_url)

app.use(bodyParser())

app.get('/', (req, res) => {
    res.json({code: 200, message: 'Welcome to the API'})
})

// Name API Routes
app.get('/api/names', nameAPI.getNames)
app.get('/api/names/:id', nameAPI.getName)
app.post('/api/names', nameAPI.postName)
app.post('/api/names/auto', nameAPI.postAutoRandom)
app.put('/api/names/:id', nameAPI.updateName)
app.delete('/api/names/:id', nameAPI.deleteName)

app.listen(port, () => {
    console.log(`The app is listening on ${port}`)
})