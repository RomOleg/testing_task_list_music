const Router = require('express');
const authorController = require('../controllers/authorController');
const createLogMiddleware = require('../middleware/createLogMiddleware');
const router = new Router()

router.post('/', authorController.create);
router.get('/', authorController.getAll);
router.get('/:id', authorController.getOne);
router.put('/', authorController.update);
router.delete('/:id', authorController.delete);
router.delete('/', authorController.deleteAll);

module.exports = router;