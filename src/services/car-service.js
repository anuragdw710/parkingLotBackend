const { CarRepository, ParkingLotRepository } = require('../repository/index');

class CarService {
    constructor() {
        this.carRepository = new CarRepository();
        this.parkingLotRepository = new ParkingLotRepository();
    }

    async create(data) {
        try {
            let capacity = await this.parkingLotRepository.get(data.parkingLotId);
            if (!capacity.length) {
                throw "No parking lot with given id";
            }
            const slot = await this.carRepository.carPresent(data.registrationNumber);
            if (slot.length) {
                throw "Car already paked in some slot"
            }

            capacity = capacity[0].capacity;
            let reserveslot = await this.carRepository.getBookedslot(data.parkingLotId);
            reserveslot = reserveslot.map((slot) => slot.slotNumber);
            for (let i = '1'; i <= capacity; i++) {
                if (!reserveslot.includes(i.toString())) {
                    data.slotNumber = i;
                    const response = await this.carRepository.create(data);
                    return response;
                }
            }
            throw "No available slot";
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async remove(data) {
        try {
            const response = await this.carRepository.remove(data);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async conditionalselect(condition, col, sortBy) {
        try {
            console.log(condition);
            console.log(col);
            console.log(sortBy);
            const response = await this.carRepository.conditionalselect(condition, col, sortBy);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
module.exports = CarService;