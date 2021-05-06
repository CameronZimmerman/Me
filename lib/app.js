const express = require('express')
const path = require('path')
const app = express()
const port = 1125

app.use(express.static('public'))
app.use('/reveal', express.static(__dirname + '/../node_modules/reveal.js/dist'))

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})


