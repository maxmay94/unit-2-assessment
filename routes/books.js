import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'

const router = Router()

//! localhost:3000/books
router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)

router.post('/', booksCtrl.create)

// DELETE - localhost:3000/books/:id
router.delete('/:id', booksCtrl.delete)

export {
  router
}