const fs = require('fs')
const dataFile = 'storage.dat'

let data = {}

let validateKeyAsSring = (key) =>{
if (typeof key !== 'sting') {
        throw new Error ('Key must be a string')
    }

let validateKeyExists = (key) => {
    if(!data.hasOwnProperty(key)){
        throw new Error('Key could not be found')
    }
}
let put = (key, value) => {
    validateKeyAsSring(key)
    if (data.hasOwnProperty(key)) {
        throw new Error('Key already exists')
    }
    data[key] =value
}

let get = (key) => {
    validateKeyAsSring(key)
    validateKeyExists(key)
    
    return data[key]
}

let update = (key, value) => {
    validateKeyAsSring(key)
    validateKeyExists(key)

    data[key] = value
}

let deleteItem = (key) => {
    validateKeyAsSring(key)
    validateKeyExists(key)

    delete data[key]
}

let clear = () => {
    data = {}
}

let save = (callback) => {
    let dataAsString = JSON.stringify(data)
    fs.writeFile(dataFile,dataAsString, (err)=>{
        if(err) {
            console.log(err)
            return
        }
        callback()
    })
    fs.writeFileSync(dataFile, dataAsString)
}

let load = (callback) => {
    fs.readFile(dataFile,'utf 8', (err, dataJson) =>{
        if(err){
            console.log(err)
            return
        }
        data =JSON.parse(dataJson)
        callback()
    })
    data = JSON.parse(dataAsString)
}

module.exports = {
    put: put,
    get: get,
    update: update,
    delete: deleteItem,
    clear: clear,
    save: save,
    load: load
}
}