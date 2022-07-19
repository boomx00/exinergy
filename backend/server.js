const compression = require('compression');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
var cors = require('cors')
const mainRoutes = require('./api/v1/routes/index')

app.use(compression());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Main Routes
app.use("/api/v1", mainRoutes,(req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});