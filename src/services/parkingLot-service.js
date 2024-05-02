const { ParkingLotRepository } = require('../repository/index');

class ParkingLotService {
    constructor() {
        this.parkingLotRepository = new ParkingLotRepository();
    }
    async create(data) {
        try {
            const capacity = await this.parkingLotRepository.get(data.id);
            if (capacity.length) {
                throw 'Id allready present';
            }
            const response = await this.parkingLotRepository.create(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ParkingLotService;