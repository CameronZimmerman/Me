const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT

app.use(express.static('public'))
app.use('/reveal', express.static(__dirname + '/../node_modules/reveal.js/dist'))

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})


