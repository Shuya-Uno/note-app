const express = require('express')

const router = express.Router()

// GET all notes & note lists
router.get('/', (req, res) => {
    res.json({mssg: 'GET all notes & note lists'})
})

// UPDATE note order
router.patch('/notes', (req, res) => {
    res.json({mssg: 'UPDATE note order'})
})

// POST new note
router.post('/notes', (req, res) => {
    res.json({mssg: 'POST new note'})
})

// UPDATE note text
router.patch('/notes/:id', (req, res) => {
    res.json({mssg: 'UPDATE note text'})
})

// DELETE note text
router.delete('/notes/:id', (req, res) => {
    res.json({mssg: 'DELETE note text'})
})

// UPDATE note list order
router.patch('/notes-list', (req, res) => {
    res.json({mssg: 'UPDATE note list order'})
})

// POST new note list
router.post('/notes-list', (req, res) => {
    res.json({mssg: 'POST new note list'})
})

// UPDATE note name
router.patch('/notes-list/:id', (req, res) => {
    res.json({mssg: 'UPDATE note name'})
})

// DELETE note tree
router.delete('/notes-list/:id', (req, res) => {
    res.json({mssg: 'DELETE note tree'})
})

module.exports = router