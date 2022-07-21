const app = require('express').Router();
const InventoryController = require('../controllers/InventoryController');
const verifyToken = require('../middleware/tokenVerifier');
const userVerifier = require('../middleware/userVerifier')

// Create a new local user
app.get("/get", InventoryController.getInventory);

app.post("/create", InventoryController.createInventory);


module.exports = app;