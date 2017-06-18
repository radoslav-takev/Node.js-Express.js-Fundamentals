const HOME_HANDLER = require('./home')
const FILES_HANDLER = require('./static-files')
const PRODUCTS_HANDLER = require('./product')
const CATEGORY_HANDLER = require('./category')

module.exports = [HOME_HANDLER, FILES_HANDLER, PRODUCTS_HANDLER, CATEGORY_HANDLER]
