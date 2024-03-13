const { CarService } = require('../services/index');

const carService = new CarService();

const createslot = async (req, res) => {
    try {
        if (!req.body.parkingLotId || !req.body.registrationNumber || !req.body.color) {
            throw "parking Lot Id or ,reg no. or color missing";
        }
        const response = await carService.create({
            "parkingLotId": req.body.parkingLotId,
            "registrationNumber": req.body.registrationNumber,
            "color": req.body.color
        }
        );
        return res.status(200).json({
            "isSuccess": true,
            "response": {
                "slotNumber": response.slotNumber,
                "status": "PARKED"
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            "isSuccess": false,
            "response": {},
            err: error
        })
    }

}

const leavecar = async (req, res) => {
    try {
        if (!req.body.parkingLotId || !req.body.registrationNumber) {
            throw "Parking Lot Id or registaration number missing";
        }
        const response = await carService.remove({
            "parkingLotId": req.body.parkingLotId,
            "registrationNumber": req.body.registrationNumber
        });
        console.log(response);
        return res.status(200).json({
            "isSuccess": true,
            "response": {
                "slotNumber": response.slotNumber,
                "registrationNumber": response.registrationNumber,
                "status": "LEFT"
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            "isSuccess": false,
            "response": {},
            err: error
        })
    }

};

const getregistrations = async (req, res) => {
    try {
        const color = req.query.color;
        const parkingLotId = req.query.parkingLotId;
        if (!color || !parkingLotId) {
            throw 'Query parameter is missing';
        }
        const response = await carService.conditionalselect(
            { color: color, parkingLotId: parkingLotId }, 'registrationNumber -_id');
        return res.status(200).json({
            "isSuccess": true,
            "response": {
                "registrations": response
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            "isSuccess": false,
            "response": {},
            err: error
        })
    }
}
const getslots = async (req, res) => {
    try {
        const color = req.query.color;
        const parkingLotId = req.query.parkingLotId;
        if (!color || !parkingLotId) {
            throw 'Query parameter is missing';
        }
        const response = await carService.conditionalselect(
            { color: color, parkingLotId: parkingLotId }, 'slotNumber -_id');
        return res.status(200).json({
            "isSuccess": true,
            "response": {
                "registrations": response
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            "isSuccess": false,
            "response": {},
            err: error
        })
    }
}

module.exports = {
    createslot,
    leavecar,
    getregistrations,
    getslots
}