let database = require('./database')
let instanodeDB = require('./instanode-db')

const MIN_DATE = new Date(-8640000000000000000)
const MAX_DATE = new Date(8640000000000000)

let minDate = ''
let maxDate = ''

database().then(() => {
  instanodeDB.saveImage({ 
    url:'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
    description: 'such cat much wow',
    tags: ['cat', 'kitty', 'cute', 'catstagram'] })
})

