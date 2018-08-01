const express = require("express");
const config = require("config");
const students = require('./students');
const courses = require('./courses');
const teachers = require('./teachers');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api/students', students);
app.use('/api/courses', courses);
app.use('/api/teachers', teachers);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(config.server.port, () => {
    console.log(`app started at port ${config.server.port}`);
});