const { CarService } = require('../services/index');

const carService = new CarService();

const createslot = async (req, res) => {
    try {
        if (!req.body.parkingLotId || !req.body.registrationNumber || !req.body.color) {
            throw "parking Lot Id or ,reg no. or color missing";
        }
        const parkingLotId = req.body.parkingLotId;
        const registrationNumber = req.body.registrationNumber;
        const color = req.body.color.toUpperCase();
        const possiblecolor = ['RED', 'GREEN', 'BLUE', 'BLACK', 'WHITE', 'YELLOW', 'ORANGE'];
        if (registrationNumber.length !== 9) {
            throw 'Registration Number is not valid';
        }
        const distict = registrationNumber[2] + registrationNumber[3];
        if (distict > "20") {
            throw 'Registration Number is not valid';
        }
        if (!possiblecolor.includes(color)) {
            throw 'Color is not valid';
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
        const parkingLotId = req.body.parkingLotId;
        const registrationNumber = req.body.registrationNumber;
        if (registrationNumber.length !== 9) {
            throw 'Registration Number is not valid';
        }
        const distict = registrationNumber[2] + registrationNumber[3];
        if (distict > "20") {
            throw 'Registration Number is not valid';
        }


        const response = await carService.remove({
            "parkingLotId": req.body.parkingLotId,
            "registrationNumber": req.body.registrationNumber
        });

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
            { color: color, parkingLotId: parkingLotId }, 'registrationNumber -_id', '+updatedAt');
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
            { color: color, parkingLotId: parkingLotId }, 'slotNumber -_id', '+slotNumber');
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