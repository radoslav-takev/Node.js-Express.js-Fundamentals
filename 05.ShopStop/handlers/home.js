const url = require('url')
const fs = require('fs')
const path = require('path')
const Product = require('../models/Product')
const qs = require('querystring')

module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname

  let filePath = path.normalize(
    path.join(__dirname, '../views/home/index.html')
)

  if (req.pathname === '/' && req.method === 'GET') {
    let queryData = qs.parse(url.parse(req.url).query)
    Product.find().then((products) => {
      if (queryData.query) {
        products = products.filter(p => p.name.toLowerCase().includes(queryData.query));
      }

      loadPage(filePath, res, products)
    })
  } else {
    return true
  }
}

function loadPage (filePath, res, products) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      throwError(err, res)
      return
    }
    let content = ''
    for (let product of products) {
      content +=
                `<div class="product-card">
                        <img class="product-img" src="${product.image}">
                        <h2>${product.name}</h2>
                        <p>${product.description}</p>
                    </div>`
    }
    let html = data.toString().replace('{content}', content)
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(html)
    res.end()
  })
}

function throwError (err, res) {
  console.log(err)
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  })
  res.write('404 not found')
  res.end()
}
