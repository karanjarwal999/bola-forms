const mongoose = require('mongoose')

const responseSchema= mongoose.Schema({
    "formId":{type:mongoose.Schema.Types.ObjectId},
    "questions":{type:{}}
})

module.exports = mongoose.model('response',responseSchema)