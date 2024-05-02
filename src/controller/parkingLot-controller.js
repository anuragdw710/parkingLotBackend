const { ParkingLotService } = require('../services/index');

const parkingLotService = new ParkingLotService();
const createParkingLot = async (req, res) => {
    try {
        if (!req.body.id || !req.body.capacity) {
            throw "Id or capacity is missing";
        }
        const id = req.body.id;
        const capacity = req.body.capacity;
        if (capacity > 2000 || capacity < 0) {
            throw 'Capacity is not valid';
        }
        const hexRegex = /^[0-9a-fA-F]+$/;
        if (!hexRegex.test(id)) {
            throw 'Id is not valid'
        }
        const response = await parkingLotService.create({
            id: id,
            capacity: capacity
        })
        return res.status(200).json({
            "isSuccess": true,
            "response": {
                "id": response.id,
                "capacity": response.capacity,
                "isActive": response.isActive
            }
        })
    } catch (error) {
        return res.status(500).json({
            "isSuccess": false,
            "response": {},
            err: error
        }
        )
    }
}

module.exports = {
    createParkingLot
}