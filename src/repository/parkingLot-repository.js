const ParkingLot = require('../models/parkingLot');

class ParkingLotRepository {
    async create(data) {
        try {
            const response = await ParkingLot.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    async get(id) {
        try {
            const capacity = await ParkingLot.find({ id: id }, 'capacity -_id');
            return capacity;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ParkingLotRepository;