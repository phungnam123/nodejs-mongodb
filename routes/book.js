const express = require('express')
const router = express.Router()
const bookController = require('../controllers/book.controller')

router.get('/', bookController.getAllBook)
router.get('/:id', bookController.getBook)
router.post('/', bookController.createBook)
router.patch('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router
