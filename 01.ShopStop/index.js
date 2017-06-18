const http = require('http')
const port = 3000
const handlers = require('./handlers')

http.createServer((req, res) => {
  // res.writeHead(200, {
  //   'Content-Type': 'text/plain'
  // })

  // res.write('Hello!')
  // res.end()
  for (let handler of handlers) {
    if (!handler(req, res)) {
      break
    }
  }
}).listen(port)

console.log(`Server is running on port ${port}`)
