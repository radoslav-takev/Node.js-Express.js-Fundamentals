const faviconPath = '/favicon.ico'
const fs = require('fs')


module.exports = (req,res) => {

       if(req.path === faviconPath) {
            fs.readFile('.' + faviconPath, (err, data) =>{
            if(err) {
                console.log(err)
                return
            }
            res.writeHead(200, {
                'Content-Type': 'image/x-icon'
            })
            res.write (data)
            res.end()
        })
     } else {
         return true
     }   
}