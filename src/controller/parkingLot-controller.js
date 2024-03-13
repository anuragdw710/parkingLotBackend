const { ParkingLotService } = require('../services/index');

const parkingLotService = new ParkingLotService();
const createParkingLot = async (req, res) => {
    try {
        console.log(req.body.id, " ", req.body.capacity);
        if (!req.body.id || !req.body.capacity) {
            throw "Id or capacity is missing";
        }
        const response = await parkingLotService.create({
            id: req.body.id,
            capacity: req.body.capacity
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
        console.log(error);
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