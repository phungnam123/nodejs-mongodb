require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const connect = require('./db/connect')
const bookRoute = require('./routes/book')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(helmet())

const PORT = process.env.PORT || 8000

// init db
connect()
// init routes
app.use('/api/v1/books', bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listening ${PORT}... `)
})
