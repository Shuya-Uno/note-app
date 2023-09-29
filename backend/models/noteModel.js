const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const ObjectId = Schema.ObjectId


const noteSchema = new Schema({
    body: {
        type: String
    },
    order: {
        type: Number
    }
})

const noteListSchema = new Schema({
    title: {
        type: String
    },
    notes: [ { type: Schema.Types.ObjectId, ref: 'NoteList' } ],
    order: {
        type: Number
    },
    selected: {
        type: Boolean
    }    
})

const accountSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    noteList: [ { type: Schema.Types.ObjectId, ref: 'Note' } ]

})

const Account = mongoose.model('Account', accountSchema)
const NoteList = mongoose.model('NoteList', noteListSchema)
const Note = mongoose.model('Note', noteSchema)


module.exports = {
    Account: Account,
    NoteList: NoteList
}