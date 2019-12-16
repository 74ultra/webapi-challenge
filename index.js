const express = require("express")

const server = express()

server.use(express.json())

server.use('/', (req, res) => {
    res.send('This is only a test').end()
})

server.listen(4000, () => {
    console.log(`Server running on port 4000`)
})