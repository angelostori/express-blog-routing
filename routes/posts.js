const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send('Show all posts here')
})

module.exports = router