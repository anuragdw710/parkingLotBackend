
#### Backend assignmnet
![image](https://github.com/anuragdw710/parkingLotBackend/assets/78266752/5f2fac33-7819-46b7-975f-12af48d47660)



Create the following APIs to

1. Create new parking Lot with capacity

   - URL Endpoint : https://parkinglotbackend-1.onrender.com/api/ParkingLots
   - verb: post
   - payload :

   ```
   {
    "id": "65e72adb1a811501c45afd72",
    "capacity": 10
   }
   ```

   - response

   ```
   {
    "isSuccess": true,
    "response": {
        "id": "65e72adb1a811501c45afd72",
        "capacity": 10,
        "isActive": true
    }
   }
   ```

   - Constraints:

   ```
   i. Capacity should not be higher than 2000 or lower than 0
   ii. Input validations
   iii. id should be a hexadecimal string ideally 24 in length

   ```

2. Park car in the parking

   - URL Endpoint : https://parkinglotbackend-1.onrender.com/api/Parkings
   - verb: post
   - payload :

   ```
   {
    "parkingLotId": "65e72adb1a811501c45afd72",
    "registrationNumber": "MH12A1234",
    "color": "YELLOW"
   }
   ```

   - response

   ```
   {
    "isSuccess": true,
    "response": {
        "slotNumber": 1,
        "status": "PARKED"
    }
   }
   ```

   - Constraints:

   ```
   i. registrationNumber  should be a valid registration number
   ii. For now you can consider that each state will have a maximum of 20 districts.
   ii. The leading alphabet after the district code should only be one in length.
   iv. Total length should be 9.
   v. status  will be limited to  PARKED  and  LEFT
   vi.  parkingLotId  should correspond an active parkingLot
   vii. Only the following colored cars are allowed in the parking lot
    RED - GREEN - BLUE - BLACK - WHITE - YELLOW - ORANGE
   ```

3. Leave / Unpark car

   - URL Endpoint : https://parkinglotbackend-1.onrender.com/api/Parkings
   - verb: delete
   - payload :

   ```
   {
    "parkingLotId": "65e72adb1a811501c45afd72",
    "registrationNumber": "MH12A1234"
   }
   ```

   - response

   ```
   {
    "isSuccess": true,
    "response": {
        "slotNumber": 1,
        "registrationNumber": "MH12A1234",
        "status": "LEFT"
    }
   }
   ```

   - Constraints:

   ```
   Same constraints as create parking
   ```

4. Registration number of cars with colour

   - URL Endpoint : https://parkinglotbackend-1.onrender.com/api/Parkings?color=WHITE&parkingLotId=65e72adb1a811501c45afd72
   - verb: get
   - queryParams: color, parkingLotId
   - response

   ```
   {
    "isSuccess": true,
    "response": {
        registrations": [
            {
                "color": "BLUE",
                "registrationNumber": "MH15A4567"
            },
            {
                "color": "BLUE",
                "registrationNumber": "MH13K4567"
            }
        ]
    }
   }
   ```

   - Constraints:

   ```
   i. registrations  array should follow natural ordering based on the db insertion
   ii. If cars of specified color (say WHITE) is not available then your api should respond with error.
   ```

5. Slot numbers for car with colour

   - URL Endpoint : https://parkinglotbackend-1.onrender.com/api/Slots?color=BLACK&parkingLotId=65e72adb1a811501c45afd72
   - verb: get
   - queryParams: color,parkingLotId

   - response

   ```
   {
    "isSuccess": true,
    "response": {
        "slots":[
            {
                "color": "BLACK",
                "slotNumber": 2
            },
            {
                "color": "BLACK",
                "slotNumber": 3
            }
        ]
    }
   }
   ```

   - Constraints:

   ```
   i. slots  should be served in increasing order by  slotNumber
   ii. If an invalid color is provided to the api to then your api should give error

   ```

### Requirement Analysis

- I own a multi-storey parking lot that can hold up to 'n' cars at any given point in time.

- Each slot is given a number starting at 1 increasing with increasing distance from the entry point in steps of one.

- I want to create an automated ticketing system that allows my customers to use my parking lot without human intervention.

- When a car
  enters my parking lot, the ticket will be issued to the driver.

- The ticket issuing process includes documenting the registration number (number plate) and the colour of the car
  and allocating an available parking slot to the car before actually handing over a ticket
  to the driver (we assume that our customers are nice enough to always park in the slots
  allocated to them).

- The customer should be allocated a parking slot which is nearest to the entry.

- At the exit the customer returns the ticket which then marks the slot they were
  using as being available.

- Due to government regulation, the system should provide me
  with the ability to find Out:
- Registration numbers of all cars of a particular colour.
- Slot number in which a car with a given registration number is parked.
- Slot numbers of all slots where a car of a particular colour is parked.
