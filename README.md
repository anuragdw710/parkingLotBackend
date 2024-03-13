### Problem Statement

-- I own a multi-storey parking lot that can hold up to 'n' cars at any given point in time.

-- Each slot is given a number starting at 1 increasing with increasing distance from the entry point in steps of one.

--  I want to create an automated ticketing system that

allows my customers to use my parking lot without human intervention.

-- When a car
enters my parking lot, the ticket will be issued to the driver. 

-- The ticket issuing process includes documenting the registration number (number plate) and the colour of the car
and allocating an available parking slot to the car before actually handing over a ticket
to the driver (we assume that our customers are nice enough to always park in the slots
allocated to them).

-- The customer should be allocated a parking slot which is nearest to the entry. 

-- At the exit the customer returns the ticket which then marks the slot they were
using as being available. 

-- Due to government regulation, the system should provide me
with the ability to find Out:

- Registration numbers of all cars of a particular colour.
- Slot number in which a car with a given registration number is parked.
- Slot numbers of all slots where a car of a particular colour is parked.

Create the following APIs to
1. Create new parking Lot with capacity
2. Park car in the parking
3. Leave / Unpark car
4. Registration number of cars with <colour>
5. Slot numbers for car with <colour>