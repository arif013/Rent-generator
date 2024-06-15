
# Monthly Rent Generator

This is a monthly rent generator, this is for the people who has properties and give this out for rent, now by using this you can easily calculate how much each tenant will pay you also customize this depending upon your need and the most important thing is everything will get stored in the database.


## Contents

* [Installation](#Installation)
* 

## Documentation

[Documentation](https://linktodocumentation)


## Installation

Clone my-project 

```bash
  mkdir Rent-Calculation
  cd Rent-Calculation
  git clone "https://github.com/arif013/Rent-generator.git"
```
Now the folder structure looks like the below:

```bash
|
-backend
-frontend
-package-lock.json
-package.json
```
Now go to the backend directory and type:
```bash
npm install
npm run dev
```
to install all the dependencies and start the server and similarly do the same for the frontend directory.
## Key Features

- Create tenants according to the availability
- Calculate their per head rent along with electricity bill
- Calculate and store due amount for future after deposite
- Availability of the history of amounts of the tenants
- Download receipts after calculation with all details (to be added)

## Technologies Used

The following Technologies have been used to create this project:
- Client
    - ReactJS
    - React router dom (to handle routing)
    - Axios (for making api calls)
    
- Server
    - Express
    - Prisma (ORM tool)
    
- Database
    - MongoDB