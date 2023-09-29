const mongoose = require('mongoose')

const Model = require('../models/noteModel')


// GET all notelist & notes
async function getNotes(req, res){
    try {
        const notes = await Model.Account.find({}).sort({"noteList.order": 1})

        console.log(notes)

        res.status(200).json(notes)
    }

    catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
}

async function createDocument(req, res){
    console.log(req.body)
    const { user } = req.body

    console.log(user)
    try {
        // const note = await Model.Account.create({ user })
        // res.status(200).json(note)

        const note = new Account ({
            user: user
        })

        const a = await note.save()
        res.status(200).json(a)
    }

    catch(error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// POST new noteList
// async function createNoteList(req, res) {
//     const { user, noteList } = req.body
//     console.log(user, noteList)
//     try {
//         const note = await Model.Account.create({ user, noteList })
//         res.status(200).json(note)
//     }

//     catch(error) {
//         res.status(400).json({
//             error: error.message
//         })
//     }
// }

// CREATE new noteList
async function createNoteList(req, res){
    const { title, notes, order, selected } = req.body

    const [ note ] = await Model.Account.find({})

    console.log(note)

    note.noteList.push({
        title: title,
        notes: notes,
        order: order,
        selected: selected
    })

    const updated = await note.save()

    res.status(200).json(updated)
}


// DELETE note list
async function deleteNoteList(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }

    // const note = await Model.Account.findById(id)

    const note = await Model.Account.findOne({ "noteList._id": id})

    // const note = await Model.Account.findOneAndDelete({ "noteList._id": id })

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }

    // console.log(note)


    const toDelete = note.noteList.id(id)

    console.log(toDelete)

    const deleted = await toDelete.deleteOne()

    console.log(deleted)

    const saved = await note.save()

    res.status(200).json(saved)
}

// UPDATE note list title
async function updateNoteListTitle(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }

    const { title }  = req.body

    console.log(title)

    // const note = await Model.Account.findOneAndUpdate({ _id: id }, { "noteList.title": title })

    const note = await Model.Account.findOne({ "noteList._id": id})

    console.log(note)

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }

    const toUpdate = note.noteList.id(id)


    toUpdate.title = title

    console.log(toUpdate)

    const updated = await note.save()

    res.status(200).json(updated)
}

// CREATE new note
async function createNote(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }


    const { body , order }  = req.body

    console.log(body, order)

    const note = await Model.Account.findOne({ "noteList._id": id})

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }

    // console.log(note)

    const noteList =  note.noteList.id(id)

    // console.log(notes)

    noteList.notes.push({
        body: body,
        order: order
    })

    console.log(noteList)

    const updated = await note.save()

    res.status(200).json(updated)
}

// DELETE note
async function deleteNote(req, res){
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No Such Target"})
    }


    const note = await Model.Account.findOne({ "noteList.notes._id": id})

    if (!note){
        return res.status(400).json({ error: "No Such Target"})
    }

    const noteList = note.noteList

    console.log(note.noteList)

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
    

    const note = await Model.Account.findOne({ "noteList.notes._id": id})

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
    updateNote,
    createDocument
}