const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/denise', (req, res) => res.send('Hello Denise!'))
app.get('/teams', (req, res) => res.send('GET teams!'))
app.get('/kendrick', (req, res) => res.send('GET kendrick!'))
app.get('/newroute', (req, res) => res.send('JUST ADDED THIS NEW ROUTE!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))