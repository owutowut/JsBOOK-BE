const mongoose = require("mongoose");
const loan = mongoose.model("loan");

exports.list_all_loans = (req, res) => {
  loan.find({}, (err, loans) => {
    if (err) res.send(err);
    res.json(loans);
  });
};

exports.create_a_loan = (req, res) => {
  const newLoan = new loan(req.body);
  newLoan.save((err, loan) => {
    if (err) res.send(err);
    res.json(loan);
  });
};

exports.read_a_loan = (req, res) => {
  loan.findById(req.params._id, (err, loan) => {
    if (err) res.send(err);
    res.json(loan);
  });
};

exports.update_a_loan = (req, res) => {
  loan.findOneAndUpdate(
    { _id: req.params._id },
    req.body,
    { new: true },
    (err, loan) => {
      if (err) res.send(err);
      res.json(loan);
    }
  );
};

exports.delete_a_loan = (req, res) => {
  loan.deleteOne({ _id: req.params._id }, (err) => {
    if (err) res.send(err);
    else {
      res.json({
        message: "loan successfully deleted",
        _id: req.params._id,
      });
    }
  });
};
