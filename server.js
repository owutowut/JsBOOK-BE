const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.Book = require('./api/models/bookModels');

const routes = require('./api/routes/bookRoutes');

mongoose.connect(
  'mongodb://localhost:27017/JsBook',
  { useNewUrlParser: true }
);
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
// tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) 
// or complex algorithm for deep parsing that can deal with nested objects (i.e. true).
app.use(bodyParser.urlencoded({ extended: true }));
// tells the system that you want json to be used.
app.use(bodyParser.json());

routes(app);
app.listen(port);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`Server started on port ${port}`);