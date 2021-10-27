const express = require('express');
const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended: false}))
const equipmentControllers = require('../app/controllers/EquipmentController')
const db = require('../connection')

router.post('/',equipmentControllers.addEquipment)

module.exports = router