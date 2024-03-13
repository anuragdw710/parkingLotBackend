const mongoose = require('mongoose');

const parkingLotSchema = new mongoose.Schema({
    id: {
        type: String,
        require: true,
        unique: true
    },
    capacity: {
        type: String,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
})
const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);
module.exports = ParkingLot;