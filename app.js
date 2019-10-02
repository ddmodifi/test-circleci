const express = require('express')

// const argv = require('yargs').argv
// const YAML = require('yaml')
// const fs = require('fs')

const app = express()
const port = process.env.PORT

// comment this out since it will now come from aws
// const environment = argv.env || 'dev'
// const file = fs.readFileSync(__dirname + '/secrets.yml', 'utf8') || ''
// const secrets = YAML.parse(file)

// if (secrets) {
//     let env = environment === 'mig' ? 'sdx' : environment
//     Object.keys(secrets[env]).forEach(key => {
//         if (key !== '<<') {
//             process.env[key] = secrets[env][key]
//         }
//     })
// }

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/denise', (req, res) => res.send('Hello Denise!'))
app.get('/database', (req, res) => res.send('Database name is: ' + process.env.DB_DATABASE))
app.get('/port', (req, res) => res.send('Port is: ' + process.env.PORT))
app.get('/teams', (req, res) => res.send('GET teams!'))
app.get('/kendrick', (req, res) => res.send('GET kendrick!'))
app.get('/newroute', (req, res) => res.send('JUST ADDED THIS NEW ROUTE!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))