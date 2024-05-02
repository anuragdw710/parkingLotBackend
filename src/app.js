const express = require('express');
const bodyParser = require('body-parser');


const connect = require('./dbConfig/dbConfig');
const apiRoutes = require('./routes/index');
const CarService = require('./services/car-service');
const ParkingLotRepository = require('./repository/parkingLot-repository');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', apiRoutes);

app.listen(3000, async () => {
    console.log('Server started at 3000');
    await connect();
    console.log('Db connected');
})
