const HTTP = require('http')
const PORT = 3009
const HANDLERS = require('./handlers')

let enviroment = process.env.NODE_ENV || 'development'
const config = require('./config/config')
const database = require('./config/database.config')

database(config[enviroment])

HTTP.createServer((req, res) => {
  for (let handler of HANDLERS) {
    let nextHandler = handler(req, res)
    if (!nextHandler) {
      break
    }
  }
}).listen(PORT)