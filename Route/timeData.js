const express = require('express');
const router = express.Router();
const dataController = require('../Controller/timeData');
const { checkFields } = require('../Middleware/checkTime');

router.post('/addNewData', checkFields, dataController.addData);
router.get('/getAllData', dataController.getTimeData)
router.get('/city', dataController.getCityName)

module.exports = router;