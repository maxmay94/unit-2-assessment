import { Book } from '../models/book.js'

function index(req, res) {
  Book.find({})
  .then(books => {
    res.render('books/index', {
      books
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

function newBook(req, res) {
  console.log('NEW BOOK')
  res.render('books/new', {
    title : 'Add Book'
  })
}

function create(req, res) {
  Book.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

function deleteBook(req, res) {
  console.log('##### DELETE BOOK ######')
  Book.findById(req.params.id)
  .then(book => {
    book.delete()
    .then(() => {
      res.redirect('/books')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

export {
  index,
  newBook as new,
  create,
  deleteBook as delete
}