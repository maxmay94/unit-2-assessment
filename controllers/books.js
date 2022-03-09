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
  console.log('CREATE!', req.body)
  Book.create(req.body)
  .then(book => {
    res.redirect('/books')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/books')
  })
}

export {
  index,
  newBook as new,
  create
}