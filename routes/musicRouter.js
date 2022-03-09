const Router = require('express');
const musicController = require('../controllers/musicController');
const router = new Router()

router.post('/', musicController.create);
router.get('/', musicController.getAll);
router.get('/:id', musicController.getOne);
router.put('/', musicController.update);
router.delete('/:id', musicController.delete);
router.delete('/', musicController.deleteAll);

module.exports = router;