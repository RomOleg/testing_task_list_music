const Router = require('express');
const createLogMiddleware = require('../middleware/createLogMiddleware');
const authorRouter = require('./authorRouter');
const musicRouter = require('./musicRouter');

const router = new Router()

router.use(createLogMiddleware)

router.use('/author', authorRouter)
router.use('/music', musicRouter)


module.exports = router
