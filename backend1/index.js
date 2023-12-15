require('dotenv').config()

const express = require('express')
const app = express()
const port = 40000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Shubhamdotcom')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>Chai pe Charcha</h2>")
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at shubhamdotcom</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})