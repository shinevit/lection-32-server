const router = require('express').Router();
const controller = require('./controller')

router
    .get('/', controller.getList)
    ;

module.exports = router