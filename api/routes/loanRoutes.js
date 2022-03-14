const loanBuilder = require('../controllers/loansController');

module.exports = app => {
  app
    .route('/loans')
    .get(loanBuilder.list_all_loans)
    .post(loanBuilder.create_a_loan);
  app
    .route('/loans/:_id')
    .get(loanBuilder.read_a_loan)
    .put(loanBuilder.update_a_loan)
    .delete(loanBuilder.delete_a_loan);
};
