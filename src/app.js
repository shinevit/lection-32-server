const express = require("express");
const config = require("config");
const students = require('./students');

const app = express();

app.use(express.static('public'));
app.use('/api/students', students);

app.listen(config.server.port, () => {
    console.log(`app started at port ${config.server.port}`);
});