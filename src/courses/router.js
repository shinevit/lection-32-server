const router = require('express').Router();
const controller = require('./controller')

router
    .get('/', controller.getList)
    .post('/', controller.add)
    .put('/:id', controller.update);

module.exports = router