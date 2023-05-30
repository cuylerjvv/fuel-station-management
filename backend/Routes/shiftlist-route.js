const express = reuire('express');

const shiftlistController = require('../Controllers/shiftlist-controller');

const router = express.Router();

router.get('/:firstday', shiftlistController.getEmployee);
router.post('/:firstday', shiftlistController.createEmployee);
router.patch('/:firstday', shiftlistController.updateEmployee);
router.delete('/:firstday', shiftlistController.deleteEmployee);

module.exports = router;