const Router = require('express');
const authorRouter = require('./authorRouter');
const musicRouter = require('./musicRouter');

const router = new Router()

router.use('/author', authorRouter)
router.use('/music', musicRouter)

module.exports = router
