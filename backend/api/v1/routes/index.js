const app = require('express').Router();
const userRoutes = require('./userRoutes')
const tokenRoutes = require('./tokenRoutes')
const inventoryRoutes = require('./inventoryRoutes')
//  Routes
app.use('/user', userRoutes);
app.use('/token', tokenRoutes);
app.use('/inventory', inventoryRoutes)
module.exports = app;