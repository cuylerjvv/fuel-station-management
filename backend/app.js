const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const databaseConnections = require('./databaseConnections');
const employeesRoute = require('./Routes/employees-route');
const shiftlistRoute = require('./Routes/employees-route');

const app = express();

app.use(bodyParser.json());

// If you use cors, In my instance I did not need to set headers
app.use(cors());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//     next();
// });

app.use('/:location/employees', (req, res, next) => {
    const location = req.params.location;
    console.log(location);
    req.location = location;
    next();
  }, employeesRoute);

app.use('/:location/shiftlist', (req, res, next) => {
    const location = req.params.location;
    req.location = location;
    next();
}, shiftlistRoute);


Promise.all([databaseConnections.dixie, databaseConnections.gazelle])
    .then(() => {
        app.listen(5000, () => {
        console.log('Server is running on http://localhost:5000');
        });
    })
    .catch(err => {
        console.log(err);
    });