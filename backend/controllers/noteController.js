const mongoose = require('mongoose')

const Note = require('../models/noteModel')


// GET all notelist & notes
async function getNotes(req, res){
    try {
        const notes = await Note.find({}).sort({"noteList.order": 1})

        res.status(200).json(notes)
    }

    catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// POST new noteList
async function createNoteList(req, res) {
    const { user, noteList, order } = req.body

    try {
        const note = await Note.create({user, noteList, order})
        res.status(200).json(note)
    }

    catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// DELETE note list
async function deleteNoteList(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }

    const note = await Note.findOneAndDelete({ _id: id })

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }

    res.status(200).json(note)
}

// UPDATE note list title
async function updateNoteListTitle(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }

    const { noteList: { title } }  = req.body

    const note = await Note.findOneAndUpdate({ _id: id }, { "noteList.title": title })

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }

    res.status(200).json(note)
}

// CREATE new note
async function createNote(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }


    const { noteList: { notes: { body }}, noteList: { notes: { order }   }}  = req.body


    const note = await Note.findOne({ "_id": id})

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }


    const notes =  note.noteList.notes

    notes.push({
        body: body,
        order: order
    })


    const updated = await note.save()

    res.status(200).json(updated)
}

// DELETE note
async function deleteNote(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }


    const note = await Note.findOne({ "noteList.notes._id": id})

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }


    const toDelete =  note.noteList.notes.id(id)

    toDelete.deleteOne()


    const updated = await note.save()

    res.status(200).json(updated)
}

// UPDATE note text
async function updateNote(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }


    const { noteList: { notes: { body }}}  = req.body
    

    const note = await Note.findOne({ "noteList.notes._id": id})

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }


    const toUpdate =  note.noteList.notes.id(id)

    toUpdate.body = body


    const updated = await note.save()

    res.status(200).json(updated)
}


module.exports = {
    createNoteList,
    getNotes,
    deleteNoteList,
    updateNoteListTitle,
    createNote,
    deleteNote,
    updateNote
}