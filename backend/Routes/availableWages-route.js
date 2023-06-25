const express = require('express')

const availableWagesController = require('../Controllers/availableWages-ontroller')

const router = express.Router();

router.get('/', availableWagesController.getAvailableWages);

module.exports = router; 