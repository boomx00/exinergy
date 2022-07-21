const app = require('express').Router();
const { token } = require('morgan');
const TokenController = require('../controllers/TokenController');
const tokenVerifier = require('../middleware/tokenVerifier');
const userVerifier = require('../middleware/userVerifier')

// Create a new local user
app.post("/refresh", TokenController.refreshToken);
app.post("/check", tokenVerifier, TokenController.checkToken);


module.exports = app;