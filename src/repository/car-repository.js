const Car = require('../models/car');

class CarRepository {
    async create(data) {
        try {
            const response = Car.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getBookedslot(id) {
        try {
            const slot = Car.find({ parkingLotId: id }, 'slotNumber -_id');
            return slot;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async carPresent(registrationNumber) {
        try {
            const slot = Car.find({ registrationNumber: registrationNumber }, 'slotNumber');
            return slot;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async remove(data) {
        try {
            const response = Car.findOneAndDelete(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async conditionalselect(condition, select, sortby) {
        try {
            console.log(sortby);
            const response = await Car.find(condition, select).sort(sortby);
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = CarRepository;