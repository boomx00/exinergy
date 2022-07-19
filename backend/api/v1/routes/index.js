const app = require('express').Router();
const userRoutes = require('./userRoutes')
const tokenRoutes = require('./tokenRoutes')

//  Routes
app.use('/user', userRoutes);
app.use('/token', tokenRoutes);

module.exports = app;