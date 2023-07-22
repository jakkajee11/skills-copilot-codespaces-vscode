// Create web server
// Create web server
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

// Create express app
const app = express()

// Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Create route for comments
app.get('/posts/:id/comments', (req, res) => {
  res.send([])
})

// Start server
app.listen(4001, () => {
  console.log('Listening on 4001')
})