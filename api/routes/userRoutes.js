const userBuilder = require('../controllers/userController');

module.exports = app => {
  app
    .route('/user')
    .get(userBuilder.list_all_users)
    .post(userBuilder.create_a_user);
  app
    .get('/profile',userBuilder.profile)
    .patch('/updateprofile',userBuilder.updateprofile)

  app
    .delete('/user/:id',userBuilder.delete)
    .get('/user/:_id',userBuilder.read_a_user)
    .put('/user/:_id',userBuilder.update_a_user)
    
  app
        .route('/login')
        .post(userBuilder.login)

//     .route('/books/:_id')
//     .get(bookBuilder.read_a_book)
//     .put(bookBuilder.update_a_book)
//     .delete(bookBuilder.delete_a_book);
};
