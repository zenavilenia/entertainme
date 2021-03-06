const router = require('express').Router()

var { findAll, create, update, destroy } = require('../controllers/tag.controller')

/* GET users listing. */
router.get('/', findAll)
      .post('/', create)
      .put('/:id', update)
      .delete('/:id', destroy)

module.exports = router;
