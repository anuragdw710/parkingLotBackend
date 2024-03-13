const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    registrationNumber: {
        type: String,
        require: true,
        unique: true
    },
    color: {
        type: String,
        require: true
    },
    slotNumber: {
        type: String,
        require: true
    },
    parkingLotId: {
        type: String,
        require: true
    }
}, { timestamps: true });

const Car = mongoose.model('Car', carSchema);
module.exports = Car;