const express = require('express')

const router = express.Router()

const {
    createNoteList,
    getNotes,
    deleteNoteList,
    updateNoteListTitle,
    createNote,
    deleteNote,
    updateNote,
    createDocument
} = require('../controllers/noteController')

// GET all notes & note lists
router.get('/', getNotes)

// CREATE new document
router.post('/', createDocument)

// CREATE new note list
router.patch('/', createNoteList)
// router.post('/', createNoteList)


// UPDATE note order
router.patch('/notes', (req, res) => {
    res.json({mssg: 'UPDATE note order'})
})

// POST new note
router.patch('/notes/content/create/:id', createNote)

// UPDATE note text
router.patch('/notes/content/update/:id', updateNote)

// DELETE note text
router.delete('/notes/content/update/:id', deleteNote)

// UPDATE note list order
router.patch('/note-list', (req, res) => {
    res.json({mssg: 'UPDATE note list order'})
})

// POST new note list
// router.post('/note-list', createNoteList)

// UPDATE note list title
router.patch('/note-list/:id', updateNoteListTitle)

// DELETE note list
router.delete('/note-list/:id', deleteNoteList)

module.exports = router