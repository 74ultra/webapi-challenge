const express = require("express")

const server = express()
server.use(express.json())

// import router
const projectRouter = require('./routers/projectRouter.js')
const actionRouter = require('./routers/actionRouter.js')

// use router
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)

server.listen(4000, () => {
    console.log(`Server running on port 4000`)
})