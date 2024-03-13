const { ParkingLotRepository } = require('../repository/index');

class ParkingLotService {
    constructor() {
        this.parkingLotRepository = new ParkingLotRepository();
    }
    async create(data) {
        try {
            const capacity = await this.parkingLotRepository.get(data.id);
            console.log("debug", data.id, capacity);
            if (capacity.length) {
                throw 'Id allready present';
            }
            const response = await this.parkingLotRepository.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ParkingLotService;