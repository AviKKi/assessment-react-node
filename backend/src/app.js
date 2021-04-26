const express = require('express')
const cors = require('cors')
const compression = require('compression')
const routes = require('./routes')

const app = express()

// parse json request body
app.use(express.json())
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }))

// gzip compression
app.use(compression())

// enable cors
app.use(cors())
app.options('*', cors())

app.use(routes)

module.exports = app
