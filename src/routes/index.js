const express = require('express');

const { parkingLotController, carController } = require('../controller/index');

const router = express.Router();

router.post('/ParkingLots', parkingLotController.createParkingLot);

router.post('/Parkings', carController.createslot);
router.delete('/Parkings', carController.leavecar);
router.get('/Parkings', carController.getregistrations);
router.get('/Slots', carController.getslots);

module.exports = router;