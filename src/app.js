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
    // const ser = new CarService();
    // const response = await ser.create({
    //     parkingLotId: '65f16190eff609bc1babb555',
    //     regno: '112346',
    //     color: 'blue'
    // });
    // console.log(response);
    // const response = await ser.remove({
    //     id: '65f15c4d8bc5b8aa15000c8c',
    //     regno: '123'
    // })
    // console.log(response);

    // const repo = new ParkingLotRepository();
    // await repo.create({
    //     capacity: '1'
    // })
})
