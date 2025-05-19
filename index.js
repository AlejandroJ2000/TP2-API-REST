const express = require('express')
const app = express()
const usersRoutes = require('./routes/user.routes')

app.use(express.json())
app.use('/usuarios', usersRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})