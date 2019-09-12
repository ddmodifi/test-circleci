const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/denise', (req, res) => res.send('Hello Denise!'))
app.get('/teams', (req, res) => res.send('GET teams!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))