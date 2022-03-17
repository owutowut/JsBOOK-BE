const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Book = require('./api/models/bookModels');
global.Loan = require('./api/models/loanModels');

const routes = require('./api/routes/bookRoutes');
const usersroutes = require('./api/routes/userRoutes');
const loanroutes = require('./api/routes/loanRoutes');

const User = require('./api/models/userModels');

const usercontroller = require('./api/controllers/userController');

mongoose.connect(
  'mongodb://localhost:27017/JsBook',
  { useNewUrlParser: true }
);
const port = process.env.PORT || 8080;
const app = express();

// var adminacc = {
//   img: "https://cdn-icons-png.flaticon.com/512/236/236831.png",
//   firstname: "Admin",
//   lastname: "Accout",
//   role: "librarian",
//   email: "admin",
//   password: "admin",
//   IDcard: "0000000000000",
//   createDate: "00/00/00",
//   tel: "000000000",
// }

// User.create(adminacc)

app.use(cors());
// tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) 
// or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({ extended: true }));
// tells the system that you want json to be used.
app.use(bodyParser.json());

routes(app);
usersroutes(app);
loanroutes(app);
app.listen(port);


app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);