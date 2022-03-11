const Router = require('express');
const authorController = require('../controllers/authorController');
const checkNameAuthorMiddleware = require('../middleware/checkNameAuthorMiddleware');
const router = new Router()

router.get('/music', authorController.getAllMusic);
router.get('/music/:id', authorController.getOneMusic);
router.get('/like', authorController.getAuthorLike);
router.get('/', authorController.getAll);
router.get('/:id', authorController.getOne);
// создание исполнителя
router.post('/', checkNameAuthorMiddleware, authorController.create);
// обновление исполнителя
router.put('/', authorController.update);

router.delete('/:id', authorController.delete);
router.delete('/', authorController.deleteAll);

module.exports = router;