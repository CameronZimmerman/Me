const express = require('express')
const app = express()
const port = 1125

app.use(express.static(path.join(__dirname, 'public')))


