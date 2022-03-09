import { Router } from 'express'
import * as booksCtrl from '../controllers/books.js'

const router = Router()

//! localhost:3000/books
router.get('/', booksCtrl.index)
router.get('/new', booksCtrl.new)

router.post('/', booksCtrl.create)

export {
  router
}