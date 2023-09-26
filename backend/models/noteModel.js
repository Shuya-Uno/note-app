const mongoose = require('mongoose')

const Schema = mongoose.Schema

// const ObjectId = Schema.ObjectId


const noteSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    noteList: {
        title: {
            type: String,
            required: true
        },
        notes: [
            {
                body: {
                    type: String,
                    required: true
                },
                order: {
                    type: Number,
                    required: true
                }
            }
        ],
        order: {
            type: Number,
            required: true
        }
    }

})

const Note = mongoose.model('Note', noteSchema)

module.exports = Note

