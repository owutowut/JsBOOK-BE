const bookBuilder = require('../controllers/booksController');

module.exports = app => {
  app
    .route('/books')
    .get(bookBuilder.list_all_books)
    .post(bookBuilder.create_a_book);
  app
    .route('/books/:_id')
    .get(bookBuilder.read_a_book)
    .put(bookBuilder.update_a_book)
    .delete(bookBuilder.delete_a_book);
};
