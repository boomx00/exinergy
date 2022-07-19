const app = require('express').Router();
const TokenController = require('../controllers/TokenController');
const tokenVerifier = require('../middleware/tokenVerifier');
const userVerifier = require('../middleware/userVerifier')

// Create a new local user
app.post("/refresh", TokenController.refreshToken);


module.exports = app;