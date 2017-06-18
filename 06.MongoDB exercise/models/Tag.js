let mongoose = require('mongoose')

let tagSchema = mongoose.Schema({
    url: {type: mongoose.Schema.Types.String, required: true},
    creationData: {type: mongoose.Schema.Types.Date, default: Date.now()},
    images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}]
})

let Tag = mongoose.model('Tag', tagSchema)

module.exports = Tag
