const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send('Show all posts here')
})

// show
router.get('/:id', (req, res) => {
    res.send(`Show the post with id: ${req.params.id}`)
})

// store
router.post('/', (req, res) => {
    res.send('Store a new post here')
})

// update
router.put('/:id', (req, res) => {
    res.send(`Update the post with id: ${req.params.id}`)
})

// modify (optional)
router.patch('/:id', (req, res) => {
    res.send(`Modify the post with id: ${req.params.id}`)
})

// destroy
router.delete('/:id', (req, res) => {
    res.send(`Delete the post with id: ${req.params.id}`)
})

module.exports = router