var express = require('express');
var router = express.Router();
const controller = require('../controllers/transactions');
const { getTransactions } = controller;
router.get('/transactions', getTransactions);
module.exports = router;
